const R = require('ramda');
const assert = require('assert');

const ApiKeys = (() => {
  let users = null;

  const init = () => {
    assert(!R.isNil(process.env.API_KEYS));
    var apiKeys = R.split(',', process.env.API_KEYS);
    assert(!R.isEmpty(apiKeys));
    apiKeys = R.map((t) => {
      const result = t.split(' ');
      assert(R.is(Array, result), `Can not init Api Keys (${t})`);
      return ({
        clientId: result[1],
        secretKey: result[2],
        scope: 'app',
        host: result[0]
      });
    }, apiKeys);

    if (R.isNil(process.env.EXTERNAL_HOSTS)) return apiKeys;
    const externalHosts = R.split(',', process.env.EXTERNAL_HOSTS);
    if (R.isEmpty(externalHosts)) return apiKeys;
    apiKeys = [...apiKeys, ...R.map((t) => {
      const result = t.split(' ');
      assert(R.is(Array, result), `Can not init Api Keys (${t})`);
      return ({
        clientId: result[1],
        secretKey: result[2],
        scope: 'external_app',
        host: result[0]
      });
    }, externalHosts)];
    return apiKeys;
  };

  const findOne = ({ clientId }) => {
    if (R.isNil(users)) users = init();

    return Promise.resolve(R.find(
      R.propEq('clientId', clientId),
      users
    ));
  };

  const getExternalHosts = () => {
    if (R.isNil(users)) users = init();
    return Promise.resolve(R.compose(
      R.map(R.prop('host')),
      R.filter(R.compose(R.not, R.isNil, R.prop('host')))
    )(users));
  };

  const findByClientIdAndSecret = (clientId, secretKey) => {
    if (R.isNil(users)) users = init();

    return Promise.resolve(R.find(
      v => R.and(
        R.propEq('clientId', clientId, v),
        R.propEq('secretKey', secretKey, v)
      ),
      users
    ));
  };

  return {
    getExternalHosts,
    init,
    findOne,
    findByClientIdAndSecret
  };
})();

module.exports = ApiKeys;
