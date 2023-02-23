
const {
  getByIdCtrl, getCtrl
} = require('../../controllers/ItemCtrl');

const ItemResolver = (context) => (() => {
  const getById = async (itemId) => {
    return getByIdCtrl(itemId);
  };

  const list = async () => {
    return getCtrl();
  };
  return {
    getById,
    list
  };
})();

module.exports = ItemResolver;
