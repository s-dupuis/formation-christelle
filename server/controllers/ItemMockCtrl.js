const R = require('ramda');

const ItemMockCtrl = (() => {
  const categories = ['A', 'B', 'C', 'D'];

  const validateCategory = (value) => {
    return R.includes(value, categories);
  };

  let items = [];
  const create = (item) => {
    if (R.is(String, item.name) && validateCategory(item.category) && R.is(String, item.group)) {
      const id = R.length(items) + 1;
      let newItem = {};
      items = R.compose(
        R.prepend(R.__, items),
        R.applySpec({
          id: R.always(id),
          name: item => R.propOr('', 'name', item),
          category: item => R.propOr('', 'category', item),
          group: item => R.propOr('', 'group', item),
          createdAt: R.always(new Date().toISOString()),
          updatedAt: R.always(new Date().toISOString())
        }))(item);
      newItem = R.head(items);
      return newItem;
    } else {
      return items;
    }
  };

  const getById = (id) => {
    return R.find(R.propEq('id', id), items);
  };

  const remove = (id) => {
    const index = R.findIndex(R.propEq('id', id), items);
    if (index !== -1) {
      const itemDeleted = R.find(R.propEq('id', id), items);
      R.remove(index, 1, items);
      return itemDeleted;
    }
    return null;
  };

  const update = (id, updates) => {
    if ((updates.name && R.is(String, updates.name)) || (updates.category && validateCategory(updates.category)) || (updates.group && R.is(String, updates.group))) {
      const index = R.findIndex(R.propEq('id', id), items);
      if (index === -1) {
        return null;
      }

      const updatedItem = R.pipe(
        R.mergeRight(R.__, updates),
        R.assoc('updatedAt', new Date().toISOString())
      )(items[index]);
      items = R.update(index, updatedItem, items);
      return updatedItem;
    } else {
      return items;
    }
  };

  const list = () => {
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
