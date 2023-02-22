const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const mocha = require('mocha');
const describe = mocha.describe;
const it = mocha.it;
const ItemMockCtrl = require('../server/controllers/ItemMockCtrl');

describe('itemMockCtrl', () => {
  describe('getById', () => {
    it('should return undefined if the items array is empty', () => {
      const id = 1;
      const result = ItemMockCtrl.getById(id);
      expect(result).to.equal(undefined);
    });
    it('should return undefined if the ID does not exist ', () => {
      const expectedItem = { name: 'test', category: 'A', group: 'group1' };

      ItemMockCtrl.create(expectedItem);
      const id = 2;
      const result = ItemMockCtrl.getById(id);
      expect(result).to.equal(undefined);
    });
    it('should return the correct item if exists', () => {
      const id = 1;
      const result = ItemMockCtrl.getById(id);
      expect(result.name).to.deep.equal('test');
      expect(result.category).to.deep.equal('A');
      expect(result.group).to.deep.equal('group1');
      expect(result.createdAt).to.includes('2023-02-22');
      expect(result.updatedAt).to.includes('2023-02-22');
    });
  });
  describe('list', () => {
    it('should return a clone of the items array', () => {
      const resultList = ItemMockCtrl.list();
      expect(resultList[0].name).to.deep.equal('test');
      expect(resultList[0].category).to.deep.equal('A');
      expect(resultList[0].group).to.deep.equal('group1');
      expect(resultList[0].createdAt).to.includes('2023-02-22');
      expect(resultList[0].updatedAt).to.includes('2023-02-22');
    });
  });
  describe('remove', () => {
    it('should return error if the id does not exist ', () => {
      const id = 2;
      assert.throws(function () { ItemMockCtrl.remove(id); }, Error, /Item not exist/);
    });

    it('should return the correct item if exists', () => {
      const id = 1;
      const result = ItemMockCtrl.remove(id);
      expect(result.name).to.deep.equal('test');
      expect(result.category).to.deep.equal('A');
      expect(result.group).to.deep.equal('group1');
      expect(result.createdAt).to.includes('2023-02-22');
      expect(result.updatedAt).to.includes('2023-02-22');
    });
  });
  describe('update', () => {
    it('should update the item if data is valid', () => {
      const id = 1;
      const updates = { name: 'updated', category: 'B' };

      const expectedItem = { name: 'test', category: 'A', group: 'group1' };

      ItemMockCtrl.create(expectedItem);

      const result = ItemMockCtrl.update(id, updates);

      expect(result[0].name).to.deep.equal('updated');
      expect(result[0].category).to.deep.equal('B');
      expect(result[0].group).to.deep.equal('group1');
      expect(result[0].createdAt).to.includes('2023-02-22');
      expect(result[0].updatedAt).to.includes('2023-02-22');
    });

    it('should throw an error if item does not exist', () => {
      const id = 2;
      const updates = { name: 'updated', category: 'B' };

      assert.throws(() => ItemMockCtrl.update(id, updates), /Item not exists/);
    });

    it('should throw an error if update fields are not valid', () => {
      const id = 1;
      const updates = { name: 'updated', category: '' };

      assert.throws(() => ItemMockCtrl.update(id, updates), /Update fields are not valid/);
    });
  });
  describe('create', () => {
    it('should return the new item if the data is valid and the name is unique', () => {
      const item = { name: 'test2', category: 'B', group: 'group2' };
      const expectedNewItem = { id: 1, name: 'test2', category: 'B', group: 'group2', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
      const result = ItemMockCtrl.create(item);

      expect(result.name).to.deep.equal(expectedNewItem.name);
      expect(result.category).to.deep.equal(expectedNewItem.category);
      expect(result.group).to.deep.equal(expectedNewItem.group);
      expect(result.createdAt).to.includes('2023-02-22');
      expect(result.updatedAt).to.includes('2023-02-22');
    });

    it('should throw an error if the data is not valid', () => {
      const item = { name: 'test', category: '', group: 'group1' };
      assert.throws(() => ItemMockCtrl.create(item), /Item fields are not valid/);
    });

    it('should throw an error if the name is not unique', () => {
      const newItem = { name: 'test', category: 'A', group: 'group1' };

      ItemMockCtrl.create(newItem);
      const item = { name: 'test', category: 'B', group: 'group2' };
      assert.throws(() => ItemMockCtrl.create(item), /Item fields are not valid/);
    });
  });
});
