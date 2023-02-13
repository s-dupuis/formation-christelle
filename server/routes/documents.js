import express from 'express';
import path from 'path';
import fs from 'fs-extra';
import { decodeFilename } from '../lib/util/filename';
const router = express.Router();

router.get('/download/:documentName', async (req, res) => {
  const { documentName } = req.params;
  try {
    return res.sendFile(path.join(process.env.ROOT_DIR, 'docs', documentName));
  } catch (error) {
    console.log('error when fetching document', error);
    return res.status(404).json();
  }
});

/**
 * @api {get} /docs/template/:filename Convert template
 * @apiName ConvertTemplate
 * @apiGroup docs
 *
 * @apiParam {String} filename
 *
 * @apiSuccess {File} file
 */
router.get('/template/:filename', async (req, res) => {
  console.log(req.params.filename);
  const filePath = path.join(process.env.ROOT_DIR, 'docs', decodeFilename(req.params.filename));
  if (!(await fs.pathExists(filePath))) {
    console.log(`file to convert not found : ${filePath}`);
    // logger.error(`file to convert not found : ${filePath}`);
  }
  res.sendFile(filePath);
});

module.exports = router;
