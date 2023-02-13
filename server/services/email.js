// import fetch from './helpers/fetchLegacy';
const R = require('ramda');
// const { logger } = require('@fasstech/logger');
const service = require('@fasstech/service');

const email = (command, args, auth, files) => {
  return service(
    'email',
    process.env.SERVICE_EMAIL_URL,
    {
      '/template': {
        route: '/template',
        method: 'POST',
        body: [
          'emailId',
          'Name',
          'Subject',
          'HtmlBody'
        ]
      },
      '/send': {
        route: '/send/:emailId',
        method: 'POST',
        body: [
          'emailId',
          'email',
          ['cc', 'o'],
          ['data', 'o'],
          ['callback', 'o'],
          ['callbackErr', 'o']
        ]
      },
      '/sendWithFile': {
        route: '/send/:emailId/withFile',
        method: 'POST',
        body: [
          'emailId',
          'email',
          ['cc', 'o'],
          ['data', 'o'],
          ['callback', 'o'],
          ['callbackErr', 'o']
        ]
      },
      '/sendWithFiles': {
        route: '/send/:emailId/withfiles',
        method: 'POST',
        body: [
          'emailId',
          'email',
          ['cc', 'o'],
          ['data', 'o'],
          ['callback', 'o'],
          ['callbackErr', 'o']
        ]
      }
    }
  )(command, args, auth, files);
};

/*
const email = (() => {
  const send = async ({ emailId, email, cc, data, callback = undefined }) => {
    if (R.isNil(email)) return logger.error('email should be defined');

    const response = await fetch.post(buildUrl(`/send/${emailId}`), { email, cc, data, callback });
    if (response.error) {
      logger.error('email.send', {
        data: { emailId, email, cc, data, callback },
        error: response.error
      });
      return false;
    }
    return true;
  };

  const sendWithAttachement = async ({ emailId, email, cc, data, src, callback = undefined }) => {
    if (R.isNil(email)) return logger.error('email should be defined');

    const response = await fetch.postFile(buildUrl(`/send/${emailId}/withfile`), { email, cc, data, callback }, src);
    if (response.error) {
      logger.error('email.sendWithAttachement', {
        data: { emailId, email, cc, data, callback },
        error: response.error
      });
    }
  };

  const sendWithAttachements = async ({ emailId, email, cc, data, src, callback = undefined }) => {
    if (R.isNil(email)) return logger.error('email should be defined');

    const response = await fetch.postFiles(buildUrl(`/send/${emailId}/withfiles`), { email, cc, data, callback }, src);
    if (response.error) {
      logger.error('email.sendWithAttachements', {
        data: { emailId, email, cc, data, callback },
        error: response.error
      });
    }
  };

  const search = async ({ filter, pagination }) => await fetch.post(buildUrl('/search'), { filter, pagination });

  return {
    search,
    send,
    sendWithAttachement,
    sendWithAttachements
  };
})();

*/
module.exports = email;
