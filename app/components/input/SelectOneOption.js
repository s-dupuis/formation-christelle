import React from 'react';
import Select from 'react-select';

const R = require('ramda');

const SelectOneOption = ({
  options,
  value,
  onChange,
  placeholder,
  hasError
}) => {
  const customStyle = {
    control: (provided) => ({
      ...provided,
      borderColor: hasError ? '#fca5a5' : R.prop('borderColor', provided)
    })
  };
  return (
    <div className='f-select-wrapper'>
      <Select
        styles={customStyle}
        value={value}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        classNamePrefix="f-select"
      />
    </div>
  );
};

export default SelectOneOption;
