require('dotenv').config();
require('@babel/register');
const R = require('ramda');
const { initGraphQL } = require('../graphql');
var http = require('http');
var debug = require('debug')('basic-server:server');
var port = normalizePort(process.env.PORT || '3000');
var authentication = require('../lib/options/authentication');
const { dbMongo } = require('../lib/options/dbMongo');
const emailRouterService = require('../services/emailRouter');
const path = require('path');
const checkEnvVars = require('../lib/options/checkEnvVars');

const initDb = async () => {
  await dbMongo.init(process.env.MONGO_DB_URL);
  return await dbMongo.isReady();
};

const agendaService = require('../services/agenda');

const initServices = async () => {
  const ENV = R.propOr('DEV', 'ENV', process.env);
  const filepath = path.join(process.env.ROOT_DIR, 'params', `emails_${ENV}.yml`);
  await emailRouterService('init', { filepath });
};

const onListening = (server) => () => {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log(bind);
  debug('Listening on ' + bind);
};

const start = async () => {
  checkEnvVars();

  var { app, setRoutes } = require('../app');
  app.set('port', port);
  var server = http.createServer(app);
  const mongoConnection = await initDb();
  await authentication.init(app, server);
  await initGraphQL(app, server);
  setRoutes();
  await agendaService('initJobs', { mongoConnection });
  await initServices();
  server.on('error', onError);
  server.on('listening', onListening(server));
  server.listen(port);
};

start();

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort (val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError (error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
    default:
      throw error;
  }
}
