/* eslint-disable camelcase */
import passport from 'passport';
import { BasicStrategy } from 'passport-http';
import { Strategy as BearerStrategy } from 'passport-http-bearer';
import ApiKeys from '../models/ApiKeys';
import jwt from 'jsonwebtoken';
import { compose, not, path, propEq } from 'ramda';

const R = require('ramda');

const expiresIn = '24h';

const authentication = (() => {
  const init = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());

    const oauth2orize = require('oauth2orize');
    const oauth2server = oauth2orize.createServer();

    app.use('/u/token', passport.authorize(['basic'], { session: false }), oauth2server.token(), oauth2server.errorHandler());

    oauth2server.exchange(oauth2orize.exchange.clientCredentials({ userProperty: 'account' }, function (client, done) {
      client = R.omit(['secretKey'], client);
      const token_access = jwt.sign({ client }, process.env.JWT_SECRET, { expiresIn });
      const token_refresh = jwt.sign({ client }, process.env.JWT_SECRET);
      done(null, token_access, token_refresh, { expires_in: expiresIn });
    }));

    oauth2server.exchange(oauth2orize.exchange.refreshToken(function (client, refreshToken, done) {
      try {
        jwt.verify(refreshToken, process.env.JWT_SECRET);
        const token_access = jwt.sign({}, process.env.JWT_SECRET, { expiresIn });
        const token_refresh = jwt.sign({}, process.env.JWT_SECRET);
        done(null, token_access, token_refresh, { expires_in: expiresIn });
      } catch (err) {
        return done(null, false);
      }
    }));

    passport.use(
      'basic',
      new BasicStrategy(
        {},
        (clientId, secretKey, done) => {
          process.nextTick(async () => {
            const user = await ApiKeys.findByClientIdAndSecret(clientId, secretKey);
            if (!R.isNil(user)) {
              return done(null, user);
            } else {
              return done(null, false);
            }
          });
        }
      ));

    passport.use(
      new BearerStrategy(
        {},
        (accessToken, done) => {
          process.nextTick(() => {
            jwt.verify(accessToken, process.env.JWT_SECRET, async (err, decoded) => {
              if (err) {
                return done(null, false);
              }

              const clientId = path(['client', 'clientId'], decoded);
              const user = await ApiKeys.findOne({ clientId });

              if (!R.isNil(user)) {
                done(null, user);
              } else {
                done(null, false);
              }
            });
          });
        },
        { session: false }
      ));

    if (propEq('SECURED_GRAPHQL', 'true', process.env)) {
      app.use(passport.authenticate('bearer', { session: false }), (req, res, next) => {
        next();
      });
    }
  };

  return {
    init
  };
})();

module.exports = authentication;
