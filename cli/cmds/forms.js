exports.command = 'forms <command>';
exports.describe = 'forms management';
exports.builder = function (yargs) {
  return yargs.commandDir('forms');
};
