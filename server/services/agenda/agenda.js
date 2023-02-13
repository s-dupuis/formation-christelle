const R = require('ramda');
const Agenda = require('agenda');
const { logger } = require('@fasstech/logger');

const agenda = (() => {
  let $handler = null;
  let $ready = null;
  const init = (mongoConnection) => {
    return new Promise((resolve) => {
      if (R.isNil($ready) && R.isNil($handler)) {
        $ready = false;
        $handler = new Agenda({
          mongo: mongoConnection.db,
          defaultLockLifetime: 7200000 // 2h
        });

        $handler.on('ready', () => {
          $handler.start();
          $ready = true;
          resolve($handler);
        });

        $handler.on('failed', (job) => {
          logger.error(`failed agenda job: ${JSON.stringify(job.attrs)}`);
        });
      } else {
        if ($ready) return resolve($handler);
        const interval = setInterval(() => {
          if (!$ready) return;
          clearInterval(interval);
          resolve($handler);
        }, 200);
      }
    });
  };

  const getHandler = () => {
    if (R.isNil($handler)) throw new Error('agenda not initialized');
    return $handler;
  };

  return ({
    init,
    getHandler
  });
})();

module.exports = agenda;
