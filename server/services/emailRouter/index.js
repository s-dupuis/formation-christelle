const R = require('ramda');
const RA = require('ramda-adjunct');
const service = require('@fasstech/service');
const yaml = require('js-yaml');
const fs = require('fs-extra');

//
var EmailRouterConfig;

const emailRouter = (command, args, auth) => {
  return service(
    'emailRouter',
    '',
    {
      init: {
        route: ({ filepath }) => {
          EmailRouterConfig = yaml.safeLoad(fs.readFileSync(filepath));
        },
        method: 'POST',
        query: [
          'filepath'
        ]
      },
      email: {
        route: ({ scope }) => {
          console.log({ scope, config: JSON.stringify(EmailRouterConfig) });
          return R.compose(
            R.propOr(EmailRouterConfig.defaultEmail, 'email'),
            R.find(R.propEq('scope', scope))
          )(EmailRouterConfig.scopes);
        },
        method: 'GET',
        query: [
          'scope'
        ]
      }
    }
  )(command, args, auth);
};

module.exports = emailRouter;
