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
      },
      '/delete': {
        route: async (itemId) => {
          const item = await Items.remove(itemId);
          if ((R.isNil(item))) {
            return {
              itemId,
              item: null
            };
          }
          return item;
        },
        method: 'DELETE',
        query: [
          'itemId'
        ]
      },
      '/update': {
        route: async (query) => {
          const item = await Items.update({ itemId: query.itemId, data: query.data });
          if ((R.isNil(item))) {
            return {
              itemId: query.itemId,
              item: null
            };
          }
          return item;
        },
        method: 'PUT',
        query: [
          'itemId', 'data'
        ]
      }
    })(command, args, auth(localServiceAccessToken));
};

module.exports = items;
