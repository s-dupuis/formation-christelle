require('dotenv').config();

const chai = require('chai');
const expect = chai.expect;
const mocha = require('mocha');
const describe = mocha.describe;
const beforeEach = mocha.beforeEach;
const afterEach = mocha.afterEach;
const it = mocha.it;
const mongoose = require('mongoose');
const itemResolver = require('../server/graphql/resolver/ItemResolver');

describe('ItemResolver', async () => {
  let items;
  mongoose.Promise = global.Promise;
  const MONGODB_URI = process.env.MONGO_DB_URL;
  await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

  const db = mongoose.connection;
  db.once('open', () => console.log('Connected!'));
  db.on('error', (error) => {
    console.warn('Error : ', error);
  });
  // runs before each test
  beforeEach(async () => {
    const result = await db.collections.items.insertMany([{
      id: '5ff6d5b61ac8ad001d51a139',
      name: 'myFirstItem',
      category: 'A',
      group: 'dev',
      createdAt: '2023-02-22T14:02:09.801Z',
      updatedAt: '2023-02-22T14:02:09.801Z'
    }, {
      id: '5ff6d5b61ac8ad001d51a140',
      name: 'mySecondItem',
      category: 'A',
      group: 'dev',
      createdAt: '2023-02-22T14:02:09.801Z',
      updatedAt: '2023-02-22T14:02:09.801Z'
    }]);
    items = result.ops;
  });
  afterEach(async function () {
    await db.collections.items.deleteMany({});
  });

  describe('getById', () => {
    it('should return undefined if the ID does not exist ', async () => {
      await Promise.resolve();
      const id = '5ff6d5b61ac8ad001d51a141';
      const result = await mongoose.connection.collections.items.findOne({ id: id });
      expect(result).to.equal(null);
    });

    it('should return the correct item if exists', async () => {
      await Promise.resolve();
      const id = '5ff6d5b61ac8ad001d51a139';
      const result = await mongoose.connection.collections.items.findOne({ id: id });
      expect(result.name).to.deep.equal('myFirstItem');
      expect(result.category).to.deep.equal('A');
      expect(result.group).to.deep.equal('dev');
      expect(result.createdAt).to.includes('2023-02-22');
      expect(result.updatedAt).to.includes('2023-02-22');
    });
  });
});
