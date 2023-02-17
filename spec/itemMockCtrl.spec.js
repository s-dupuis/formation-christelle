const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const sinon = require('sinon');
const mocha = require('mocha');
const describe = mocha.describe;
const beforeEach = mocha.beforeEach;
const afterEach = mocha.afterEach;
const it = mocha.it;
const ItemMockCtrl = require('../server/controllers/ItemMockCtrl');
const R = require('ramda');
describe('itemMockCtrl', () => {
  describe('getById', () => {
    it('should return undefined if the items array is empty', () => {
      const items = [];
      const id = 1;
      const result = ItemMockCtrl.getById(id, items);
      expect(result).to.equal(undefined);
    });
    it('should return undefined if the ID does not exist ', () => {
      const items = [
        { id: 1, name: 'test', category: 'A', group: 'group1' },
        { id: 3, name: 'test3', category: 'C', group: 'group3' }
      ];
      const id = 2;
      const result = ItemMockCtrl.getById(id, items);
      expect(result).to.equal(undefined);
    });
    it('should return the correct item if exists', () => {
      const expectedItem = { id: 1, name: 'test', category: 'A', group: 'group1' };
      const items = [
        { id: 1, name: 'test', category: 'A', group: 'group1' },
        { id: 3, name: 'test3', category: 'C', group: 'group3' }
      ];
      const id = 1;
      const findStub = sinon.stub(R, 'find').returns(expectedItem);
      const result = ItemMockCtrl.getById(id, items);
      expect(result).to.deep.equal(expectedItem);
      findStub.restore();
    });
  });
  describe('list', () => {
    it('should return a clone of the items array', () => {
      const items = [
        { id: 1, name: 'test', category: 'A', group: 'group1' },
        { id: 2, name: 'test2', category: 'B', group: 'group2' },
        { id: 3, name: 'test3', category: 'C', group: 'group3' }
      ];
      const expectedList = items;
      const cloneStub = sinon.stub(R, 'clone').returns(expectedList);
      const resultList = ItemMockCtrl.list(items);
      expect(resultList).to.deep.equal(expectedList);
      cloneStub.restore();
    });
  });
  describe('remove', () => {
    let findStub;
    let items;
    beforeEach(function () {
      findStub = sinon.stub(R, 'find');
      items = [
        { id: 1, name: 'test', category: 'A', group: 'group1' },
        { id: 3, name: 'test3', category: 'C', group: 'group3' }
      ];
    });

    afterEach(function () {
      findStub.restore();
    });
    it('should return error if the id does not exist ', () => {
      const id = 2;
      findStub.returns(undefined);
      assert.throws(function () { ItemMockCtrl.remove(id, items); }, Error, /Item not exist/);
    });
    it('should return the correct item if exists', () => {
      const expectedItem = { id: 1, name: 'test', category: 'A', group: 'group1' };
      const id = 1;
      findStub.returns(expectedItem);
      const result = ItemMockCtrl.remove(id, items);
      expect(result).to.deep.equal(expectedItem);
      expect(items).to.not.include(expectedItem);
    });
  });
  describe('create', () => {
    let items;
    beforeEach(() => {
      items = [];
    });

    it('should return the new item if the data is valid and the name is unique', () => {
      const item = { name: 'test2', category: 'B', group: 'group2' };
      const expectedNewItem = { id: 1, name: 'test2', category: 'B', group: 'group2', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
      const result = ItemMockCtrl.create(item, items);
      expect(result).to.deep.equal(expectedNewItem);
    });

    it('should throw an error if the data is not valid', () => {
      const item = { name: 'test', category: '', group: 'group1' };
      assert.throws(function () { ItemMockCtrl.create(item, items); }, Error, /Item fields are not valid/);
    });

    it('should throw an error if the name is not unique', () => {
      const findNameStub = sinon.stub(ItemMockCtrl, 'findName').returns(true);
      items = [{ id: 1, name: 'test', category: 'A', group: 'group1', createdAt: '2023-02-16T17:00:00.000Z', updatedAt: '2023-02-16T17:00:00.000Z' }];
      const item = { name: 'test', category: 'B', group: 'group2' };
      assert.throws(function () { ItemMockCtrl.create(item, items); }, Error, /Item fields are not valid/);
      findNameStub.restore();
    });
  });
});
