import step01 from '@@pages/step01Besoin';

const Ajv = require('ajv');
const ajv = new Ajv({ useDefaults: true });

const dataSchema = {
  type: 'object',
  properties: {
  },
  additionalProperties: true
};

const setup = {
  initialStep: ['step_01'],
  steps: [
    step01
  ],
  dataValidator: (data) => {
    return new Promise((resolve, reject) => {
      const valid = ajv.validate(dataSchema, data);
      if (valid) {
        resolve(true);
      } else {
        console.error(JSON.stringify(ajv.errors));
        // throw new Error('invalid config');
        reject(new Error('invalid config'));
        // assert.fail('invalid config');
      }
    });
  }
};

export default setup;
