require('dotenv').config();

const { expect } = require('chai');
const { describe, beforeEach, before, after, it } = require('mocha');
const { dbMongo } = require('../server/lib/options/dbMongo');
const Items = require('../server/services/items/Items');
const itemResolver = require('../server/graphql/resolver/ItemResolver');

const items = [];

describe('ItemResolver', async () => {
  before(async () => {
    const MONGODB_URI = process.env.MONGO_DB_URL;
    await dbMongo.init(MONGODB_URI);
    await dbMongo.isReady();
  });
  after(async () => {
    await dbMongo.disconnect();
  });
  beforeEach(async () => {
    const firstItem = await Items.create({
      name: 'myFirstItem',
      category: 'A',
      group: 'dev',
      createdAt: '2023-02-24T14:02:09.801Z',
      updatedAt: '2023-02-24T14:02:09.801Z'
    });

    const secondItem = await Items.create({
      name: 'mySecondItem',
      category: 'A',
      group: 'dev',
      createdAt: '2023-02-24T14:02:09.801Z',
      updatedAt: '2023-02-24T14:02:09.801Z'
    });
    items.push(firstItem);
    items.push(secondItem);
  });

  describe('list', () => {
    it('should return the correct count of documents', async () => {
      const result = await itemResolver().list();
      expect(result.items.length).to.equal(items.length);
    });
  });
  describe('create', () => {
    it('should create the document', async () => {
      const result = await itemResolver().create({ name: 'Test Create', category: 'A', group: 'dev' });
      expect(result.ok).to.equal(true);
    });
  });
});
