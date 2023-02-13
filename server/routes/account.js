const R = require('ramda');
const router = require('express').Router();
const { createApporteurAccountRequestCtrl } = require('../controllers/account');

router.post('/apporteur/signuprequest', async (req, res) => {
  const response = await createApporteurAccountRequestCtrl({
    callback: `http://localhost:${process.env.PORT}/account/apporteur/signuprequest/callback`,
    callbackErr: `http://localhost:${process.env.PORT}/account/apporteur/signuprequest/callback/error?requestId=test`,
    ...R.pick(['username', 'email', 'partyId'], req.body)
  });
  res.send(req.body);
});

router.get('/apporteur/signuprequest/callback', async (req, res) => {
  console.log('==> callback: ', JSON.stringify(req.query));
  return res.end();
});

router.get('/apporteur/signuprequest/callback/error', async (req, res) => {
  console.log('==> callback error: ', JSON.stringify(req.query));
  return res.end();
});

module.exports = router;
