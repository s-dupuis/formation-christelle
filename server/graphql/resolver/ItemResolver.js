
const {
  getByIdCtrl, getCtrl, createCtrl, removeCtrl, updateCtrl
} = require('../../controllers/ItemCtrl');

const ItemResolver = (context) => (() => {
  const getById = async (itemId) => {
    return getByIdCtrl(itemId);
  };

  const list = async () => {
    return getCtrl();
  };

  const create = async (item) => {
    return createCtrl(item);
  };

  const remove = async (itemId) => {
    return removeCtrl(itemId);
  };

  const update = async (itemId, data) => {
    return updateCtrl(itemId, data);
  };

  return {
    getById,
    list,
    create,
    remove,
    update
  };
})();

module.exports = ItemResolver;
