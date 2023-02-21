const itemService = require('../services/items');

const ItemCtrl = (() => {
  const getByIdCtrl = async (id) => {
    return itemService('/get', { itemId: id });
  };

  return {
    getByIdCtrl
  };
})();

module.exports = ItemCtrl;
