import { logger } from '@fasstech/logger';
const R = require('ramda');
const assert = require('assert');
const YAML = require('yaml');
const fs = require('fs-extra');
const path = require('path');

const checkEnvVars = () => {
  const check = (envVars, areRequired) => {
    const varNames = R.keys(envVars);
    let missingVarNames = [];
    const ok = R.reduce((ok, varName) => {
      const isDefined = R.has(varName, process.env);
      if (!isDefined) {
        missingVarNames = R.append(varName, missingVarNames);
      }
      return ok && isDefined;
    }, true, varNames);
    R.forEach((varName) => {
      logger.info(`${varName} (${areRequired ? 'required' : 'optional'}) is not defined (${(R.prop(varName, envVars))})`);
    }, missingVarNames);
    if (areRequired) assert(ok, `Some required env vars are missing (${missingVarNames})`);
  };

  assert(R.has('ROOT_DIR', process.env), 'ROOT_DIR must be defined');

  const file = fs.readFileSync(path.join(process.env.ROOT_DIR, 'envVars.yml'), 'utf8');

  const envVars = YAML.parse(file);

  if (R.has('required', envVars)) check(envVars.required, true);
  if (R.has('optional', envVars)) check(envVars.optional, false);
};

module.exports = checkEnvVars;
