import Moment from 'moment';
import Promise from 'bluebird';
import { v1 as uuid } from 'uuid';
const { dbMongo } = require('../../lib/options/dbMongo');
const memoize = require('memoizee');
const R = require('ramda');
const mongoose = require('mongoose');

const toObjectId = R.compose(
  R.when(R.is(String), (v) => mongoose.Types.ObjectId(v))
);

const UserSessions = (() => {
  const getHandler = memoize(dbMongo.useCollection, { promise: true });

  const errors = {
  };

  const getCollectionHandler = (collection = 'userSessions') => {
    return getHandler(collection);
  };

  const createOne = async ({ sessionId, user }) => {
    const handler = await getCollectionHandler();
    const $user = await handler.findOne({ 'user.username': user.username });
    if (R.isNil($user)) {
      const response = await handler.create({ user, sessionId, dates: { signIn: Date.now() } });
      console.log(JSON.stringify(response, null, 1));
      return response;
    } else {
      return await handler.updateOne({ _id: $user._id }, { $set: { sessionId } });
    }
  };

  const find = async ({ query = {} }) => {
    const handler = await getCollectionHandler();
    return handler.find();
  };

  const findOne = async ({ query }) => {
    const handler = await getCollectionHandler();
    return handler.findOne(query);
  };

  const removeOne = async ({ sessionId }) => {
    const handler = await getCollectionHandler();
    return handler.deleteOne({ sessionId });
  };

  return {
    errors,
    createOne,
    find,
    findOne,
    removeOne
  };
})();

module.exports = UserSessions;
