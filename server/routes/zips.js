const router = require('express').Router();
const path = require('path');

router.get('/:zipId', async (req, res) => {
  res.status(200).download(path.join(process.env.ROOT_DIR, 'tmp', req.params.zipId), req.params.zipId);

  // TODO supprimer archive
});

module.exports = router;
