const R = require('ramda');
const userSessionCrl = require('../../controllers/userSession');

const getUser = async (req, res, next) => {
  try {
    const response = await userSessionCrl.session({ sessionId: req.sessionID });
    req.user = !R.isNil(response) ? response.user : {};
  } catch (err) {
    console.log(err.message);
    req.user = {};
  }
  next();
};

module.exports = getUser;
