import fetch from './fetchLegacy';
// import { metrics } from '@fasstech/fasst-metrics';

const converter = (() => {
  const build = async (file, fields) => {
    try {
      const ret = fetch.post(`${process.env.SERVICE_CONVERTER_URL}/api/v1/actions`, {
        action: 'DOCX_TO_PDF',
        data: {
          file: file,
          template: fields
        }
      });
      // metrics.increment('DOC_GENERATED_SUCCESS');
      return ret;
    } catch (err) {
      // metrics.increment('DOC_GENERATED_FAILED');
      throw new Error('conversion failed');
    }
  };

  return {
    build
  };
})();

module.exports = converter;
