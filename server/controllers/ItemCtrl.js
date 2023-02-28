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
      return {
        ok: false
      };
    }
  };

  const getCtrl = async () => {
    const items = await itemService('/items', {});
    if (items) {
      return {
        ok: true,
        items: items
      };
    } else {
      return {
        ok: false
      };
    }
  };

  const createCtrl = async (item) => {
    const itemCreated = await itemService('/item', { item: item });

    if (itemCreated) {
      return {
        ok: true,
        item: itemCreated
      };
    } else {
      return {
        ok: false
      };
    }
  };

  return {
    getByIdCtrl,
    getCtrl,
    createCtrl
  };
})();

module.exports = ItemCtrl;
