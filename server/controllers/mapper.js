const R = require('ramda');

const mapper = (mapping, contract = {}) => (source) => {
  const keys = R.keys(mapping);
  let obj = {};
  R.forEach(
    (key) => {
      let value;
      if (R.is(Function, mapping[key])) {
        value = mapping[key](source, { ...contract, ...obj });
      } else {
        value = R.path(mapping[key].split('.'), source);
      }
      obj = R.assocPath(key.split('.'), value, obj);
    }
  )(keys);
  return obj;
};

module.exports = mapper;
