const memoize = require('memoizee');
const { dbMongo } = require('../../lib/options/dbMongo');
const R = require('ramda');
const mongoose = require('mongoose');

const toObjectId = R.compose(
  R.when(R.is(String), (v) => mongoose.Types.ObjectId(v))
);

const Items = (() => {
  const getHandler = memoize(dbMongo.useCollection, { promise: true });

  const getCollectionHandler = (collection = 'items') => {
    return getHandler(collection);
  };
  const create = async (item) => {
    const handler = await getCollectionHandler();
    return handler.create({ name: item.name, category: item.category, group: item.group });
  };

  const get = async ({ query = {} }) => {
    const handler = await getCollectionHandler();
    return handler.find();
  };

  const getById = async (query) => {
    const handler = await getCollectionHandler();
    return handler.findOne({ _id: toObjectId(query.itemId) });
  };

  const remove = async ({ itemId }) => {

  };

  const update = async ({ itemId }) => {

  };

  return {
    create,
    get,
    getById,
    remove,
    update
  };
})();

module.exports = Items;
