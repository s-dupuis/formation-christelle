import Agenda from 'agenda';
const R = require('ramda');

const agenda = (() => {
  let _handler = null;
  let _ready = null;
  const init = () => {
    return new Promise((resolve, reject) => {
      if (R.isNil(_ready) && R.isNil(_handler)) {
        _ready = false;
        _handler = new Agenda({
          db: {
            address: process.env.MONGO_DB_URL
          }
        });

        _handler.on('ready', () => {
          _handler.start();
          _ready = true;
          resolve(_handler);
        });
      } else {
        if (_ready) return resolve(_handler);
        const interval = setInterval(() => {
          if (!_ready) return;
          clearInterval(interval);
          resolve(_handler);
        }, 200);
      }
    });
  };

  const getHandler = () => {
    if (R.isNil(_handler)) throw new Error('agenda not initialized');
    return _handler;
  };

  return ({
    init,
    getHandler
  });
})();

module.exports = agenda;
