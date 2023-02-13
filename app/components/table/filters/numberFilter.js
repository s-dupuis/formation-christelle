import { matchSorter } from 'match-sorter';
const R = require('ramda');

var numberFilter = (rows, id, filterValue) => {
  if (!R.isNil(filterValue.search)) {
    rows = matchSorter(rows, filterValue.search, { keys: [row => row.values[id]] });
    if (R.isNil(filterValue.sort)) return rows;
  }
  if (!R.isNil(filterValue.sort)) {
    rows = matchSorter(rows, '', {
      baseSort: (a, b) => {
        let number1 = R.path(['item', 'values', id], a);
        let number2 = R.path(['item', 'values', id], b);
        number1 = R.is(Number, number1) ? number1 : parseFloat(number1);
        number2 = R.is(Number, number2) ? number2 : parseFloat(number2);
        if (number1 < number2) return -1;
        if (number1 > number2) return 1;
        return 0;
      }
    });
    if (filterValue.sort === 'DESC') return R.reverse(rows);
    return rows;
  }
  return rows;
};

numberFilter.autoRemove = val => !val;

export default numberFilter;
