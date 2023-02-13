import S from 'string';

// const magicKey = process.env.DOCS_CACHING_KEY || Config.get('fileConverter.cachingKey');
const magicKey = Math.random().toString();
const encodeFilename = (filename, ext = 'docx') => S(Buffer.from(`/docs/${filename}.${ext}`).toString('base64')).ensureLeft(magicKey).s;
const decodeFilename = filename => Buffer.from(S(filename).chompLeft(magicKey).s, 'base64').toString();
const encodeFilepath = (filepath) => S(Buffer.from(`${filepath}.docx`).toString('base64')).ensureLeft(magicKey).s;

export {
  decodeFilename,
  encodeFilename,
  encodeFilepath
};
