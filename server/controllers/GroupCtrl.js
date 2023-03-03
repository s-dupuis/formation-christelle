const groupsService = require('../services/groups');
const R = require('ramda');
const formatSelectObject = (group) => { return { label: group, value: group }; };
const GroupCtrl = (() => {
  const getCtrl = async () => {
    const groups = await groupsService('get', {});
    if (groups) {
      const groupsFormatted = R.map(formatSelectObject, groups);

      return {
        ok: true,
        groups: groupsFormatted
      };
    } else {
      return {
        ok: false
      };
    }
  };

  return {
    getCtrl
  };
})();

module.exports = GroupCtrl;
