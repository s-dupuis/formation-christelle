const R = require('ramda');
const express = require('express');
const router = express.Router();
const path = require('path');
const jwt = require('jsonwebtoken');

// const browserConfig = path.join(process.env.ROOT_DIR, 'server', 'compatibility.yml');
// const browserChecker = BrowserChecker(browserConfig);

router.use('/upload', require('./upload'));
router.use('/zips', require('./zips'));
router.use('/documents', require('./documents'));

router.use('/callback', require('./callback'));

router.get('/ping', (req, res, next) => {
  res.send({ ok: true });
});

router.get('/info', (req, res) => {
  const version = require('../lib/version');
  res.send({
    version: R.pathOr('latest', ['env', 'TAG_VERSION'], process),
    buildDate: R.pathOr('NA', ['date'], version.get())
  });
});

router.get('/icon/:filename', (req, res) => {
  const path = `${process.env.ROOT_DIR}/public/icons`;
  res.sendFile(req.params.filename, { root: path });
});

router.get('/image/:filename', (req, res) => {
  const path = `${process.env.ROOT_DIR}/public/images`;
  res.sendFile(req.params.filename, { root: path });
});

router.get('/graphqlwsurl', (req, res) => {
  res.send({
    subscriptionUrl: process.env.GRAPHQL_WS_URL,
    subscriptionAccessToken: jwt.sign({ sessionId: req.sessionID }, process.env.JWT_SECRET)
  });
});

router.use((err, req, res, next) => {
  if (R.isNil(err)) return next();
  if (err.isBoom) {
    res.status(err.output.statusCode).json(err.output.payload);
  } else {
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).json(err.message);
  }
});

router.get('*', (req, res) => {
  res.sendFile(path.join(process.env.ROOT_DIR, 'dist', 'index.html'));
});

module.exports = router;
