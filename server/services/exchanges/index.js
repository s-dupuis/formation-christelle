const R = require('ramda');
const RA = require('ramda-adjunct');
const Exchanges = require('./model');
const service = require('@fasstech/service');
const moment = require('moment');

const mongoizeFilter = (filter) => (fields) => {
  const cleanQuery = R.filter(R.compose(R.not, RA.isNilOrEmpty));

  let query = [];
  let sort = {};

  R.forEach((field) => {
    const key = R.compose(R.nth(0), R.keys)(field);
    const mappingKey = field[key];
    if (!R.isNil(R.path([key, 'search'], filter))) {
      const searchString = filter[key].search;
      if (R.is(Object, mappingKey)) {
        if (R.is(Function, mappingKey.search)) {
          query = [...query, mappingKey.search(searchString)];
        } else if (R.is(String, mappingKey.search)) {
          query = [...query, { [mappingKey.search]: { $regex: new RegExp(searchString) } }];
        } else {
          throw new Error('filter bad configuration');
        }
      } else {
        // default query
        query = [...query, { [mappingKey]: { $regex: new RegExp(searchString) } }];
      }
    }
    if (!R.isNil(R.path([key, 'sort'], filter))) {
      if (R.is(Object, mappingKey)) {
        if (R.is(Function, mappingKey.sort)) {
          sort = { ...sort, ...mappingKey.sort(filter[key].sort) };
        } else if (R.is(String, mappingKey.sort)) {
          sort = { ...sort, [mappingKey.sort]: filter[key].sort === 'ASC' ? 'asc' : 'desc' };
        } else {
          throw new Error('filter bad configuration');
        }
      } else {
        // default sort
        sort = { ...sort, [mappingKey]: filter[key].sort === 'ASC' ? 'asc' : 'desc' };
      }
    }
  })(fields);

  query = cleanQuery(query);

  return {
    query: R.isEmpty(query) ? {} : { $and: query },
    sort
  };
};

const exchanges = (command, args, auth) => {
  return service(
    'exchanges',
    '',
    {
      create: {
        route: ({ username, subject, date }) => {
          return Exchanges.create({ username, subject, date });
        },
        body: [
          'username',
          'subject',
          'date'
        ]
      },
      get: {
        route: async ({ filter, pagination }) => {
          try {
            const { query, sort } = mongoizeFilter(filter)([
              {
                date: {
                  search: (search) => {
                    // * Handle no date search
                    if (R.isNil(search) || R.isEmpty(search)) return null;

                    // * Get date to find elements with format
                    // const dateToFind = moment(search, 'DD/MM/YYYY');
                    const dateToFind = moment(search);
                    // * Build query
                    return {
                      'dates.sent': {
                        $gte: dateToFind.toDate(),
                        $lt: dateToFind.add(1, 'day').toDate()
                      }
                    };
                  },
                  sort: 'dates.sent'
                }
              }, {
                subject: 'subject'
              }, {
                username: {
                  search: (search) => {
                    return { username: search };
                  },
                  sort: 'username'
                }
              }
            ]);

            const response = await Exchanges.findPagination({ query, pagination, sort });
            return response;
          } catch (err) {
            return ({
              items: [],
              pagination: {
                total: 0,
                limit: pagination.limit,
                page: 0,
                pages: 0
              }
            });
          }
        },
        query: [
          'filter',
          'pagination'
        ]
      },
      messageSent: {
        route: ({ exchangeId, messageId, date }) => {
          return Exchanges.updateOne(
            exchangeId, {
              $set: {
                messageId,
                status: '__SENT__',
                'dates.sentToBG': date
              }
            }
          );
        },
        body: [
          'exchangeId',
          'messageId',
          'date'
        ]
      },
      messageSentError: {
        route: ({ exchangeId }) => {
          return Exchanges.updateOne(
            exchangeId, {
              $set: {
                status: '__SENT_ERROR__'
              }
            }
          );
        },
        body: [
          'exchangeId'
        ]
      }
    }
  )(command, args, auth);
};

module.exports = exchanges;
