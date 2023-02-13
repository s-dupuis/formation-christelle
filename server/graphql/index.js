const R = require('ramda');
const { ApolloServer, PubSub } = require('apollo-server-express');
const pubsub = new PubSub();
const jwt = require('jsonwebtoken');
const assert = require('assert');
const localServiceAccessToken = jwt.sign({ local: true }, process.env.JWT_SECRET);
const queryMapJson = require('../../persisted-queries.json');

const initGraphQL = async (app, server) => {
  const schema = require('./schema');
  const allowedIntrospectionAndPlayground = process.env.NODE_ENV === 'development';
  const apolloServer = new ApolloServer({
    schema,
    introspection: allowedIntrospectionAndPlayground,
    playground: allowedIntrospectionAndPlayground,
    context: async ({ req, res, connection }) => {
      if (!R.isNil(connection)) {
        // console.log(JSON.stringify(connection.context));
        return {};
      }
      try {
        assert(!R.isNil(req));
        const user = R.propOr({}, 'user', req);
        const sessionId = R.propOr(null, 'sessionID', req);

        return {
          host: `${req.protocol}://${req.get('host')}`,
          cookie: R.pathOr(null, ['header', 'cookie'], req),
          localServiceAccessToken,
          user,
          sessionId
        };
      } catch (err) {
        console.log(err.stack);
      }
    },
    subscriptions: {
      onConnect: (connectionParams) => {
        const { sessionId } = jwt.verify(connectionParams.accessToken, process.env.JWT_SECRET);
        return {
          sessionId
        };
      },
      onDisconnect: () => {
        console.log('Disconnected.');
      }
    }
  });

  app.post('/graphql', (req, res, next) => {
    if (R.has('queryId', req.body)) {
      const query = R.prop(req.body.queryId, queryMapJson);
      req.body.query = query;
    }
    // console.log(req.body.query);
    next();
  });

  apolloServer.applyMiddleware({ app });

  apolloServer.installSubscriptionHandlers(server);

  return ({ graphqlPath: apolloServer.graphqlPath, subscriptionsPath: apolloServer.subscriptionsPath });
};

module.exports = {
  initGraphQL,
  pubsub
};
