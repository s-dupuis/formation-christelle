
const {
  getByIdCtrl
} = require('../../controllers/ItemCtrl');

const ItemResolver = (context) => (() => {
  const getById = async (itemId) => {
    return getByIdCtrl(itemId);
  };

  return {
    getById
  };
})();

module.exports = ItemResolver;
