const R = require('ramda');
const assert = require('assert');
var colors = require('colors/safe');
const Promise = require('bluebird');
const autoIncrement = require('mongoose-auto-increment');
const { createModel } = require('mongoose-gridfs');

const Schemas = require('../../schemas.js');

const logOk = message => console.log(colors.green(message));
const logKo = message => console.log(colors.red(message));
const log = message => console.log(colors.grey(message));

const getHandler = (collection) => {
  return dbMongo.useCollection(collection);
};

const getBucketHandler = () => {
  const findOne = (filename) => {
    return new Promise(async (resolve, reject) => {
      const handler = await dbMongo.useBucket();
      handler.findOne({ filename }, (error, file) => {
        if (error) return reject(error);
        if (R.isEmpty(file)) return reject(new Error('file not found'));
        return resolve(file);
      });
    });
  };

  const deleteFile = (filename) => {
    return new Promise(async (resolve, reject) => {
      try {
        const file = await findOne(filename);
        const handler = await dbMongo.useBucket();
        handler.unlink(file._id, (error) => {
          if (error) return reject(error);
          return resolve();
        });
      } catch (error) {
        return resolve(error);
      }
    });
  };

  const readFile = (filename) => {
    return new Promise(async (resolve, reject) => {
      const handler = await dbMongo.useBucket();
      handler.findOne({ filename }, (error, file) => {
        if (R.isNil(file)) {
          return reject(new Error(`file not found (${filename})`));
        }
        handler.read({ filename }, (error, buffer) => {
          if (error) return reject(error);
          return resolve(buffer.toString());
        });
      });
    });
  };

  const readFileStream = (filename) => {
    return new Promise(async (resolve, reject) => {
      const handler = await dbMongo.useBucket();
      handler.findOne({ filename }, (error, file) => {
        if (R.isNil(file)) {
          return reject(new Error(`file not found (${filename})`));
        }
        return resolve(handler.read({ filename }));
      });
    });
  };

  const saveFile = (filepath, filename) => {
    const { createReadStream } = require('fs');
    return new Promise(async (resolve, reject) => {
      const handler = await dbMongo.useBucket();
      const readStream = createReadStream(filepath);
      const options = ({ filename });
      handler.write(options, readStream, (error, file) => {
        if (error) return reject(error);
        return resolve(file);
      });
    });
  };

  const saveFileStream = (filename, readStream) => {
    return new Promise(async (resolve, reject) => {
      const handler = await dbMongo.useBucket();
      const options = ({ filename });
      handler.write(options, readStream, (error, file) => {
        if (error) return reject(error);
        return resolve(file);
      });
    });
  };

  return {
    deleteFile,
    findOne,
    readFile,
    readFileStream,
    saveFile,
    saveFileStream
  };
};

const dbMongo = (() => {
  const mongoose = require('mongoose');
  var connecting = false;
  var requesterCbs = [];

  let context = { db: null, url: null };

  const dbIsNotOpened = R.compose(R.isNil, R.prop('db'));
  const getCollection = name => R.prop(name, Schemas);
  const getDb = R.prop('db');
  const setDb = R.assoc('db');
  const getBucket = R.prop('bucket');
  const setBucket = R.assoc('bucket');
  const setUrl = R.assoc('url');
  const getUrl = R.prop('url');

  const init = (url) => {
    context = setUrl(url)(context);
  };

  const connect = callback => {
    if (R.isNil(getUrl(context))) {
      return callback(null, 'PATH TO DATABASE NOT SET');
    }

    assert(!dbIsNotOpened(context), 'make sure isReady is called before calling connect');
    callback(getDb(context));
  };

  const disconnect = () => {
    if (R.isNil(R.propOr(undefined, 'db', context))) throw new Error('db not connected');
    return getDb(context).close();
  };

  const useCollection = (collection) => {
    return new Promise((resolve, reject) => {
      connect((db, err) => {
        if (err) reject(err);
        if (R.is(String, collection)) {
          resolve(db.model(collection, Schemas[collection]));
        } else {
          resolve(db.model(collection, getCollection(collection)));
        }
      });
    });
  };

  const useBucket = () => {
    return new Promise((resolve, reject) => {
      connect((db, err) => {
        if (err) reject(err);
        resolve(getBucket(context));
      });
    });
  };

  const getModel = (collection) => {
    return mongoose.model(collection, getCollection(collection));
  };

  const isReady = async (options = { retry: true }) => {
    try {
      mongoose.Promise = require('bluebird');
      const connection = await mongoose.createConnection(getUrl(context), { useNewUrlParser: true, useUnifiedTopology: true });
      context = setDb(connection)(context);
      context = setBucket(createModel({ connection }))(context);
      logOk(`database connection ok: ${context.url}`);
      return connection;
    } catch (err) {
      logKo(`database connection ko: ${context.url}, retry in 5 seconds`);
      if (R.propOr(true, 'retry', options)) {
        await Promise.delay(5000);
        return isReady();
      } else {
        throw err;
      }
    }
  };

  const initAutoIncrements = (list) => {
    return new Promise((resolve, reject) => {
      connect((db, err) => {
        autoIncrement.initialize(db);
        R.forEach(
          ({ collection, field, startAt = 1, incrementBy = 1 }) => Schemas[collection].plugin(autoIncrement.plugin, { model: collection, field, startAt: 1, incrementBy: 1 })
        )(list);
        resolve();
      });
    });
  };

  return {
    init,
    initAutoIncrements,
    isReady,
    useCollection,
    useBucket,
    getModel,
    disconnect
  };
})();

module.exports = {
  dbMongo,
  getHandler,
  getBucketHandler
};
