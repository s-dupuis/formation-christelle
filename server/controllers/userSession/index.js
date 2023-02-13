const signIn = require('./signInCtrl');
const signOut = require('./signOutCtrl');
const session = require('./sessionCtrl');

const userSessionCtrl = {
  signIn,
  signOut,
  session
};

module.exports = userSessionCtrl;
