import _fetch from 'node-fetch';
const R = require('ramda');
const { logger } = require('@fasstech/logger');

const authorizationHeader = (access_token) => R.when(R.is(String), R.always(`Bearer ${access_token}`), access_token);

const fetch = (() => {
  const get = async (url, access_token = undefined) => {
    try {
      const response = await _fetch(
        url,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: authorizationHeader(access_token)
          }
        }
      );
      const json = await response.json();
      return json;
    } catch (err) {
      logger.error(err.stack);
    }
  };

  const post = async (url, body, access_token = undefined) => {
    const response = await _fetch(
      url,
      {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
          Authorization: authorizationHeader(access_token)
        }
      }
    );
    const json = await response.json();
    return json;
  };

  return {
    get,
    post
  };
})();

module.exports = fetch;
