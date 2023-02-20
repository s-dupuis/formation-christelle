const R = require('ramda');

const ItemMockCtrl = (() => {
  const categories = ['A', 'B', 'C', 'D'];
  const validateCategoryOrNil = (value) => {
    return R.or(R.isNil(value), R.includes(value, categories));
  };

  const validateStringOrNil = (value) => {
    return R.or(R.isNil(value), R.is(String, value));
  };
  const findName = (name1, arr) => R.compose(
    R.includes(name1),
    R.pluck('name')
  )(arr);

  const dataValidationSpec = {
    name: validateStringOrNil,
    category: validateCategoryOrNil,
    group: validateStringOrNil
  };

  const isValidData = R.where(dataValidationSpec);

  const getNextId = (items) => {
    if (R.isEmpty(items)) {
      return 1;
    } else {
      const ids = R.pluck('id', items);
      const maxId = R.apply(Math.max, ids);
      return maxId + 1;
    }
  };

  let items = [];
  const create = (item) => {
    if (isValidData(item) && !findName(item.name, items)) {
      const id = getNextId(items);
      let newItem = {};
      items = R.compose(
        R.prepend(R.__, items),
        R.assoc('id', id),
        R.assoc('createdAt', new Date().toISOString()),
        R.assoc('updatedAt', new Date().toISOString())
      )(item);
      newItem = R.head(items);
      return newItem;
    } else {
      throw new Error('Item fields are not valid');
    }
  };

  const getById = (id) => {
    return R.find(R.propEq('id', id), items);
  };

  const remove = (id) => {
    const itemDeleted = R.find(R.propEq('id', id), items);
    if (!itemDeleted) {
      throw new Error('Item not exist');
    }
    items = R.reject(R.propEq('id', id), items);
    return itemDeleted;
  };

  const update = (id, updates) => {
    if (isValidData(updates)) {
      const index = R.findIndex(R.propEq('id', id), items);
      if (R.equals(index, -1)) {
        throw new Error('Item not exists');
      }
      items = R.adjust(
        index,
        R.compose(
          R.assoc('updatedAt', new Date().toISOString()),
          R.mergeLeft(updates)
        ),
        items
      );
      return items;
    } else {
      throw new Error('Update fields are not valid');
    }
  };

  const list = () => {
    return R.clone(items);
  };

  return {
    create,
    findName,
    getById,
    getNextId,
    isValidData,
    list,
    remove,
    update
  };
})();

module.exports = ItemMockCtrl;
