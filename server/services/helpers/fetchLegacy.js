import _fetch from 'node-fetch';
import FormData from 'form-data';
import fs from 'fs';
const R = require('ramda');

const fetch = (() => {
  const authorizationHeader = (accessToken) => R.when(R.is(String), R.always(`Bearer ${accessToken}`), accessToken);

  const get = async (url, access_token = undefined) => {
    const response = await _fetch(
      url,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: authorizationHeader(access_token)
        }
      }
    );
    return await response.json();
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
    return await response.json();
  };

  const postFile = async (url, data, src, access_token = '') => {
    const form = new FormData();
    form.append('data', JSON.stringify(data));
    form.append('file', fs.createReadStream(src));
    form.append('Authorization', authorizationHeader(access_token));

    const response = await _fetch(
      url,
      {
        headers: form.getHeaders(),
        method: 'POST',
        body: form
      }
    );
    return await response.json();
  };

  const postFiles = async (url, data, src, access_token = '') => {
    const form = new FormData();
    form.append('data', JSON.stringify(data));
    form.append('Authorization', authorizationHeader(access_token));

    src.forEach(function (path) {
      form.append('files', fs.createReadStream(path).on('error', function () {
        throw new Error(`Fichier introuvable : ${path}`);
      }));
    });

    const response = await _fetch(
      url,
      {
        headers: form.getHeaders(),
        method: 'POST',
        body: form
      }
    );
    return await response.json();
  };

  return {
    get,
    post,
    postFile,
    postFiles
  };
})();

module.exports = fetch;
