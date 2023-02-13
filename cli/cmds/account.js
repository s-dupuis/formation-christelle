exports.command = 'account <command>';
exports.describe = 'account management';
exports.builder = function (yargs) {
  return yargs.commandDir('account');
};
