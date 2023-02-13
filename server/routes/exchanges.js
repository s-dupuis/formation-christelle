const R = require('ramda');
const router = require('express').Router();
const { messageSentCtrl, messageSentErrorCtrl } = require('../controllers/message');

router.get('/messagesent/callback', async (req, res) => {
  const { exchangeId, messageId } = req.query;
  messageSentCtrl({ exchangeId, messageId });
  return res.send({});
});

router.get('/messagesent/callback/error', async (req, res) => {
  const { exchangeId } = req.query;
  messageSentErrorCtrl({ exchangeId });
  return res.send({});
});

module.exports = router;
