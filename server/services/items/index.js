const R = require('ramda');
const service = require('@fasstech/service');
const Items = require('./Items');

const auth = token => () => ({
  header: {
    Authorization: `Bearer ${token}`
  }
});

const items = (command, args, localServiceAccessToken) => {
  return service(
    'items',
    '',
    {
      '/get': {
        route: async (itemId) => {
          const item = await Items.getById(itemId);
          if ((R.isNil(item))) {
            return {
              itemId,
              item: null
            };
          }
          return item;
        },
        method: 'GET',
        query: [
          'itemId'
        ]
      },
      '/items': {
        route: () => {
          return Items.get({ query: {} });
        },
        method: 'GET'
      },
      '/item': {
        route: (item) => {
          const newItem = JSON.parse(JSON.stringify(item.item));
          return Items.create(newItem);
        },
        method: 'POST',
        body: [
          'item'
        ]
      }
    })(command, args, auth(localServiceAccessToken));
};

module.exports = items;
