const version = (() => {
  const get = () => {
    var value = '__VERSION__';
    if (value === '') value = 'latest';

    var date = new Date('__DATE__');

    if (isNaN(date)) {
      date = new Date().toString();
    } else {
      date = date.toString();
    }
    return {
      value,
      date
    };
  };

  const toString = (v) => {
    return `${v.value} ${v.date}`;
  };

  return {
    get,
    toString
  };
})();

module.exports = version;
