import { matchSorter } from 'match-sorter';
const R = require('ramda');

var textFilter = (rows, id, filterValue) => {
  if (!R.isNil(filterValue.search)) {
    rows = matchSorter(rows, filterValue.search, { keys: [row => row.values[id]] });
    if (R.isNil(filterValue.sort)) return rows;
  }
  if (!R.isNil(filterValue.sort)) {
    rows = matchSorter(rows, '', {
      keys: [row => {
        return row.values[id];
      }]
    });
    return filterValue.sort === 'ASC' ? rows : R.reverse(rows);
  }
  return rows;
};

textFilter.autoRemove = val => !val;

export default textFilter;
