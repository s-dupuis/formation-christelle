
const fetch = require('node-fetch');
exports.command = 'activate [username] [email]';
exports.describe = 'will send an email to a given user with a link to set his password.';

exports.builder = function (yargs) {
  return yargs
    .version(false)
    .option('username', {
      describe: 'username',
      alias: 'u',
      type: 'string'
    })
    .option('email', {
      describe: 'email',
      alias: 'e',
      type: 'string'
    });
};

exports.handler = async function (argv) {
  await fetch(`http://localhost:${process.env.PORT}/account/apporteur/signuprequest`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: argv.username,
      email: argv.email
    })
  });

  process.exit(0);
};
