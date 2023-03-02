
const {
  getByIdCtrl, getCtrl, createCtrl
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

  return {
    getById,
    list,
    create
  };
})();

module.exports = ItemResolver;
