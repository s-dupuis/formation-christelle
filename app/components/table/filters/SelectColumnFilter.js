/* eslint-disable react/display-name */
import React from 'react';
import Select from 'react-select';
import SortFilter from './components/SortFilter';

const R = require('ramda');

const getByLabel = (label, options) => R.find(R.propEq('label', label))(options);
const getByValue = (value, options) => R.find(R.propEq('value', value))(options);

const customStyles = {
  container: (provided) => ({
    ...provided,
    flex: 1,
    maxWidth: '200px'
  })
};

const SelectColumnFilter = (options) => ({
  column: { filterValue, preFilteredRows, setFilter },
  setAllFilters
}) => {
  const onUpdateFilter = (mode) => {
    return () => {
      setAllFilters([]);
      setFilter({ ...filterValue, sort: mode });
    };
  };
  return (
    <SortFilter onUpdateFilter={onUpdateFilter}>
      <Select
        styles={customStyles}
        isClearable={true}
        placeholder="Tous"
        value={getByValue(R.propOr(undefined, 'search', filterValue), options)}
        onChange={(value) => {
          value = !R.isNil(value) ? value.value : undefined;
          setFilter({ ...filterValue, search: R.when(R.isEmpty, R.always(undefined), value) });
        }}
        options={options}
      />
    </SortFilter>
  );
};

SelectColumnFilter.getByLabel = getByLabel;
SelectColumnFilter.getByValue = getByValue;

export default SelectColumnFilter;
