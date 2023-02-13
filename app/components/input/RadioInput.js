import React from 'react';
import classNames from 'classnames';
const R = require('ramda');

const RadioInput = ({
  className,
  options,
  name,
  onChange,
  value
}) => {
  const $onChange = (v) => (e) => {
    e.preventDefault();
    onChange(v);
  };

  return (
    <ul className={`f-radio-buttons ${className}`}>
      {R.map((option) => (
        <li
          key={option.value}
          className={classNames('f-radio-buttons-item', { 'f-radio-buttons-item-selected': option.value === value })}
          type="radio"
          onClick={$onChange(option.value)}
        >
          {option.label}
        </li>
      ), R.defaultTo([], options)
      )}
    </ul>
  );
};

export default RadioInput;
