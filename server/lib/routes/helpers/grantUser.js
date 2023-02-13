const R = require('ramda');
const Boom = require('@hapi/boom');

const grantUser = (req, res, next) => {
  try {
    if (R.pathEq(['auth', 'local'], true, req)) {
      return next(); // appel de l'api depuis le serveur (pas de vérification de l'utilisateur)
    }
    if (R.isNil(req.user) || R.isEmpty(req.user)) {
      console.log('unauthorized: ', JSON.stringify(req.user));
      return next(Boom.unauthorized());
    }
    next();
  } catch (err) {
    next(Boom.badImplementation(err.message));
  }
};

module.exports = grantUser;
