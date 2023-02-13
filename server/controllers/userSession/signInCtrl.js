const R = require('ramda');
const userSessionService = require('../../services/userSession');

const signInCtrl = async ({ username, password, sessionId }) => {
  let user;
  if (username === 'admin' && password === R.propOr('admin', 'ADMIN_PASSWORD', process.env)) {
    user = {
      id: null,
      username,
      sessionId,
      email: 'admin@fasst.io',
      role: 'ADMIN'
    };
  }

  if (R.isNil(user)) {
    return null;
  }
  await userSessionService('/open', { sessionId, user });
  return user;
};

module.exports = signInCtrl;
