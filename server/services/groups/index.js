const service = require('@fasstech/service');

const groups = (command, args, auth) => {
  return service(
    'groups',
    process.env.GROUPS_SERVICE_URL,
    {
      get: {
        route: '/groups',
        method: 'GET'
      }
    }
  )(command, args, auth);
};

module.exports = groups;
