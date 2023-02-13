const userSessionService = require('../../services/userSession');

const signOutCtrl = async ({ sessionId }) => {
  await userSessionService('/close', { sessionId });
  return null;
};

module.exports = signOutCtrl;
