const R = require('ramda');
const Promise = require('bluebird');
const fs = require('fs');
const path = require('path');
const assert = require('assert');
const yaml = require('js-yaml');
const emailService = require('../../../server/services/email');
const templatePath = path.join(process.env.ROOT_DIR, process.env.POSTMARK_TEMPLATES_DIR);

const getTemplates = (filter) => {
  const regex = /(\w+)[^-]*$/gm;
  return R.compose(
    R.filter(R.propEq('Version', filter.version)),
    R.map((template) => {
      const version = template.EmailId.match(regex);
      return R.assoc('Version', version[0], template);
    })
  )(R.propOr([], 'templates')(yaml.safeLoad(fs.readFileSync(path.join(templatePath, 'templates.yml')))));
};

const buildTemplate = (template) => {
  const getResource = (filepath) => (resource) => {
    resource = path.join(filepath, resource);
    if (fs.existsSync(resource)) {
      return fs.readFileSync(resource, 'utf8');
    }
    return '';
  };

  const getTemplateHTML = (template) => {
    assert(R.has('Version', template), 'Version must be defined');
    const resource = getResource(path.join(templatePath, template.Version));

    const style = resource('style.css');
    const header = resource('header.html');
    const core = resource(`${template.Name}.html`);
    const signature = resource('signature.html');

    return `<html><style>${style}></style><body>${header}${core}${signature}</body></html>`;
  };

  const attr = k => R.prop(k)(template);
  return {
    emailId: attr('EmailId'),
    Name: attr('Name'),
    Subject: attr('Subject'),
    HtmlBody: getTemplateHTML(template)
  };
};

const buildPostmarkTemplates = async ({ version }) => {
  assert(!R.isNil(process.env.POSTMARK_TEMPLATES_DIR), 'POSTMARK_TEMPLATES_DIR must be defined');

  const templates = getTemplates({ version });
  await Promise.all(
    templates.map(async (template) => {
      await emailService('/template', buildTemplate(template));
    })
  );

  console.log('postmark templates built');
};

/**
 * yargs script declaration
 */
exports.command = 'buildTemplates [version]';
exports.describe = 'build postmark email templates';
exports.builder = function (yargs) {
  return yargs
    .version(false)
    .option('version', {
      describe: 'templates version',
      type: 'string'
    })
    .demandOption(['version']);
};

exports.handler = async function (argv) {
  await buildPostmarkTemplates({
    prefix: argv.prefix,
    version: argv.version
  });
};
