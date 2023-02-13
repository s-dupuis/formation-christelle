const R = require('ramda');
const RA = require('ramda-adjunct');
const assert = require('assert');
const memoize = require('memoizee');
const { dbMongo } = require('../../lib/options/dbMongo');
const mongoose = require('mongoose');

const fieldsToObject = (fields, objectKey) => (obj) => R.compose(
  R.omit(fields),
  R.assoc(objectKey, R.pick(fields, obj))
)(obj);

const toObjectId = R.compose(
  R.when(R.is(String), (v) => mongoose.Types.ObjectId(v))
);

const formatPagination = ({ docs, totalDocs, page, totalPages, limit }, fieldname) => ({
  [fieldname]: docs,
  pagination: {
    total: totalDocs,
    page,
    pages: totalPages,
    limit
  }
});

const Exchanges = (() => {
  const getHandler = memoize(dbMongo.useCollection, { promise: true });

  const errors = {
  };

  const getCollectionHandler = (collection = 'exchanges') => {
    return getHandler(collection);
  };

  const create = async ({ username, subject, date }) => {
    const handler = await getCollectionHandler();
    return handler.create({
      username,
      subject,
      status: '__NEW__',
      dates: {
        sent: date
      }
    });
  };

  const findPagination = async ({ query, sort = {}, pagination }) => {
    const handler = await getCollectionHandler();
    const response = await handler.paginate(query, { ...pagination, sort });
    return formatPagination(response, 'items');
  };

  const updateOne = async (exchangeId, updates) => {
    const handler = await getCollectionHandler();
    return handler.updateOne({ _id: toObjectId(exchangeId) }, updates);
  };

  return {
    errors,
    create,
    findPagination,
    updateOne
  };
})();

module.exports = Exchanges;
