const R = require('ramda');
const service = require('@fasstech/service');
const UserSessions = require('./UserSessions');
const auth = token => () => ({
  header: {
    Authorization: `Bearer ${token}`
  }
});

const sessions = (command, args, localServiceAccessToken) => {
  return service(
    'users',
    '',
    {
      '/get': {
        route: async ({ sessionId }) => {
          const session = await UserSessions.findOne({ query: { sessionId } });
          if ((R.isNil(session))) {
            return {
              sessionId,
              user: null
            };
          }
          return session;
        },
        method: 'GET',
        query: [
          'sessionId'
        ]
      },
      '/open': {
        route: ({ sessionId, user }) => {
          return UserSessions.createOne({ sessionId, user });
        },
        method: 'POST',
        body: [
          'sessionId',
          'user'
        ]
      },
      '/close': {
        route: ({ sessionId }) => {
          return UserSessions.removeOne({ sessionId });
        },
        method: 'POST',
        body: [
          'sessionId'
        ]
      },
      '/sessions': {
        route: () => {
          return UserSessions.find({ query: {} });
        },
        method: 'GET'
      }
    }
  )(command, args, auth(localServiceAccessToken));
};

module.exports = sessions;
