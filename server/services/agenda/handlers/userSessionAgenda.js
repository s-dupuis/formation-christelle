const R = require('ramda');
const { logger } = require('@fasstech/logger');
const Promise = require('bluebird');
const Moment = require('moment');
const userSessionService = require('../../userSession');

const userSessionAgenda = (agendaHandler) => {
  const testJobHandler = async (job, done) => {
    done();
  };

  const closeSessionsHandler = (job, done) => {
    const compute = async () => {
      const userSessions = await userSessionService('/sessions');
      const now = Moment();
      await Promise.mapSeries(userSessions, async (userSession) => {
        const signInDate = R.path(['dates', 'signIn'], userSession);
        if (R.isNil(signInDate)) {
          await userSessionService('/close', { sessionId: userSession.sessionId });
        } else {
          const duration = (Moment.duration(now.diff(Moment(signInDate)))).asHours(); // exprimé en heures
          /**
             * on ferme la section si il est plus de 3h00 du matin
             * ou
             * si la session a duré plus de 10h00
             */
          if (now.hours() === parseInt(R.propOr('3', 'USER_SESSION_AUTOMATIC_SIGN_OUT_HOUR', process.env)) || duration > parseInt(R.propOr('10', 'USER_SESSION_DURATION', process.env))) {
            await userSessionService('/close', { sessionId: userSession.sessionId });
          }
        }
      });
    };
    compute().then(() => {
      done();
    }).catch((err) => {
      console.log(err.stack);
      done();
    });
  };

  agendaHandler.define('test', testJobHandler);
  agendaHandler.define('close sessions', closeSessionsHandler);
  agendaHandler.cancel({ name: 'close sessions' });
  agendaHandler.every('10 seconds', 'close sessions');

  logger.info('userSession agenda is ready');
};

module.exports = userSessionAgenda;
