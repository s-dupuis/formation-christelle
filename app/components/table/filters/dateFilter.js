import moment from 'moment';
import { matchSorter } from 'match-sorter';
const R = require('ramda');

var dateFilter = (rows, id, filterValue) => {
  if (!R.isNil(filterValue.search)) {
    rows = matchSorter(rows, filterValue.search, { keys: [row => row.values[id]] });
    if (R.isNil(filterValue.sort)) return rows;
  }
  if (!R.isNil(filterValue.sort)) {
    rows = matchSorter(rows, '', {
      baseSort: (a, b) => {
        const date1 = moment(R.path(['item', 'values', id], a));
        const date2 = moment(R.path(['item', 'values', id], b));
        if (date1.isBefore(date2)) return -1;
        if (date1.isAfter(date2)) return 1;
        return 0;
      }
    });
    if (filterValue.sort === 'DESC') return R.reverse(rows);
    return rows;
  }
  return rows;
};

dateFilter.autoRemove = val => !val;

export default dateFilter;
