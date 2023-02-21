const itemService = require('../services/items');

const ItemCtrl = (() => {
  const getByIdCtrl = async (id) => {
    const item = await itemService('/get', { itemId: id });
    if (item) {
      return {
        ok: true,
        item: item
      };
    } else {
      throw (new Error('Item not exists'));
    }
  };

  return {
    getByIdCtrl
  };
})();

module.exports = ItemCtrl;
