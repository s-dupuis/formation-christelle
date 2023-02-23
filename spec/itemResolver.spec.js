require('dotenv').config();

const { expect } = require('chai');
const { describe, beforeEach, afterEach, before, after, it } = require('mocha');
const mongoose = require('mongoose');
const { dbMongo } = require('../server/lib/options/dbMongo');
const itemSchema = require('../server/schemas').items;
const Items = mongoose.model('Items', itemSchema);

const items = [];

describe('ItemResolver', async () => {
  mongoose.Promise = global.Promise;
  before(async () => {
    const MONGODB_URI = process.env.MONGO_DB_URL;
    await dbMongo.init(MONGODB_URI);
    await dbMongo.isReady();
    await mongoose.connect(MONGODB_URI);
  });
  after(async () => {
    await dbMongo.disconnect();
  });
  beforeEach(async () => {
    const firstItem = new Items({
      name: 'myFirstItem',
      category: 'A',
      group: 'dev',
      createdAt: '2023-02-22T14:02:09.801Z',
      updatedAt: '2023-02-22T14:02:09.801Z'
    });

    const secondItem = new Items({
      name: 'mySecondItem',
      category: 'A',
      group: 'dev',
      createdAt: '2023-02-22T14:02:09.801Z',
      updatedAt: '2023-02-22T14:02:09.801Z'
    });
    items.push(firstItem);
    items.push(secondItem);
    await firstItem.save();
    await secondItem.save();
  });

  afterEach(async () => {
    await Items.deleteMany();
  });

  describe('list', () => {
    it('should return the correct count of documents', async () => {
      await Promise.resolve();
      const result = await Items.find({});
      expect(result.length).to.equal(items.length);
    });
  });
});
