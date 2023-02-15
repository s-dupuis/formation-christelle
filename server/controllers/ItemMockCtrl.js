const R = require('ramda');

const ItemMockCtrl = (() => {
  let items = [];
  const create = async (item) => {
    const id = R.length(items) + 1;
    const newItem = R.merge({ id: id }, item);
    items = R.append(newItem, items);
    return newItem;
  };

  const getById = async (id) => {
    return R.find(R.propEq('id', id), items);
  };

  const remove = async (id) => {
    const index = R.findIndex(R.propEq('id', id), items);
    if (index !== -1) {
      return items.splice(index, 1)[0];
    }
    return null;
  };

  const update = async (id, updates) => {
    const index = R.findIndex(R.propEq('id', id), items);
    if (index !== -1) {
      const updatedItem = R.merge(items[index], updates);
      items[index] = updatedItem;
      return updatedItem;
    }
    return null;
  };

  const list = async () => {
    return R.clone(items);
  };

  return {
    create,
    getById,
    remove,
    update,
    list
  };
})();

module.exports = ItemMockCtrl;
