exports.command = 'postmark <command>';
exports.describe = 'postmark management';
exports.builder = function (yargs) {
  return yargs.commandDir('postmark');
};
exports.handler = function (argv) {};
