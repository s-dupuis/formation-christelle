import { logger } from '@fasstech/logger';

const R = require('ramda');

const express = require('express');
const router = express.Router();

router.get('/email/:emailId', async ({ params, query }, res) => {
  const { emailId } = params;
  const messageId = R.propOr(R.prop('messageId', query), 'message_id', query);
  logger.info('email callback receive', { emailId, messageId });
  res.send({ ok: true });
});

module.exports = router;
