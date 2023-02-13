/* eslint-disable camelcase */
import Tokens from '../lib/Tokens';
const R = require('ramda');

const {
  Environment,
  Network,
  RecordSource,
  Store
} = require('relay-runtime');

const GQLEnvironment = (() => {
  let _environment = null;
  const sendRequest = async (url, headers, body, refresh_token = false) => {
    const access_token = await Tokens.getAccessToken(refresh_token);
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        ...headers,
        Authorization: `Bearer ${access_token}`
      },
      body
    });

    if (response.status === 200) {
      const json = await response.json();
      const { errors } = json;

      if (R.isNil(errors) || R.isEmpty(errors)) return json;
      throw Error(R.pathOr('graphql request failed', [0, 'message'])(errors));
    }

    if (response.status === 401) {
      if (!refresh_token) throw new Error('can not refresh access token');
      return sendRequest(url, headers, body, true);
    }

    return new Error('graphql request failed');
  };

  const fetchQuery = async (operation, variables, cacheConfig) => {
    let body = new FormData();
    body = JSON.stringify({
      queryId: operation.id,
      // query: operation.text,
      variables
    });
    const headers = {
      Accept: '*/*',
      'Content-Type': 'application/json'
    };

    return sendRequest('/graphql', headers, body);
  };

  const init = async () => {
    _environment = new Environment({
      network: Network.create(fetchQuery),
      store: new Store(new RecordSource())
    });
  };

  const get = () => {
    return _environment;
  };

  return {
    init,
    get
  };
})();

export default GQLEnvironment;
