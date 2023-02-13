const R = require('ramda');
const router = require('express').Router();
const { logger } = require('@fasstech/logger');
const multer = require('multer');
const path = require('path');
const uploadPath = path.join(process.env.ROOT_DIR, 'uploads');
const upload = multer({ dest: uploadPath });

router.post('/file', upload.single('file'), async (req, res) => {
  console.log(JSON.stringify(req.file));
  const file = ({
    uploadId: req.file.filename,
    fileName: req.file.originalname
  });
  res.send(file);
});

router.post('/files', upload.array('files'), async (req, res) => {
  const files = req.files.map(file => ({
    uploadId: file.filename,
    fileName: file.originalname
  }));
  res.send(files);
});

router.post('/postfile', upload.single('file'), async (req, res) => {
  const body = JSON.parse(req.body.body);
  console.log(JSON.stringify(body));
  const file = ({
    uploadId: req.file.filename,
    fileName: req.file.originalname
  });
  console.log(JSON.stringify(file));
  res.send(file);
});

router.post('/postfiles', upload.array('files'), async (req, res) => {
  const body = JSON.parse(req.body.body);
  console.log(JSON.stringify(body));
  const files = req.files.map(file => ({
    uploadId: file.filename,
    fileName: file.originalname
  }));
  res.send(files);
  console.log(JSON.stringify(files));
});

module.exports = router;
