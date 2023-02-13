const R = require('ramda');
const service = require('@fasstech/service');
const agenda = require('./agenda');

const useSessionAgenda = require('./handlers/userSessionAgenda');

const agendaService = (command, args) => {
  return service(
    'agenda',
    null,
    {
      initJobs: {
        route: async ({ mongoConnection }) => {
          const agendaHandler = await agenda.init(mongoConnection);
          await useSessionAgenda(agendaHandler);
        },
        method: 'POST',
        body: [
          'mongoConnection'
        ]
      },
      now: {
        route: ({ jobId, data }) => {
          return agenda.getHandler().now(jobId, data);
        },
        method: 'POST',
        body: [
          'jobId',
          'data'
        ]
      }
    }
  )(command, args);
};

module.exports = agendaService;
