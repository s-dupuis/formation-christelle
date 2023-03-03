const {
  getCtrl
} = require('../../controllers/GroupCtrl');

const GroupResolver = (context) => (() => {
  const get = async () => {
    return getCtrl();
  };

  return {
    get
  };
})();

module.exports = GroupResolver;
