/* eslint-disable react/display-name */
import React from 'react';

import SortFilter from './components/SortFilter';
import { DatePicker } from '@@components/input';

const R = require('ramda');

const SelectDateFilter = () => ({
  column: { filterValue, preFilteredRows, setFilter },
  setAllFilters
}) => {
  // * Basic general function for update the sort
  const onUpdateFilter = (mode) => {
    return () => {
      setAllFilters([]);
      setFilter({ ...filterValue, sort: mode });
    };
  };

  return (
    <SortFilter onUpdateFilter={onUpdateFilter}>
      <DatePicker
        value={R.propOr(null, 'search', filterValue)}
        onChange={newDate => {
          setFilter({ ...filterValue, search: newDate });
        }}
      />
    </SortFilter>
  );
};

export default SelectDateFilter;
