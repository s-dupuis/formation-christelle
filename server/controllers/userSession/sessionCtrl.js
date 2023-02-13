const R = require('ramda');
const userSessionService = require('../../services/userSession');

const sessionCtrl = async ({ sessionId }) => {
  const response = await userSessionService('/get', { sessionId });
  const clientSessionId = R.path(['user', 'clientSessionId'], response);
  try {
    return response;
  } catch (err) {
    console.log(`COM_TAILWIND_PROXY_SESSION_EXPIRED! for session ${clientSessionId}`);
    throw new Error('COM_TAILWIND_PROXY_SESSION_EXPIRED');
  }
};

module.exports = sessionCtrl;
