import React from 'react';
import classNames from 'classnames';

const R = require('ramda');
const Input = ({ register, field, errors }) => {
  const hasError = R.keys(errors).includes(field.name);
  return (<>
    <input
      className={classNames('f-input', { 'f-input-error': hasError })}
      ref={register({ required: field.required })}
      type="email"
      name={field.name}
      placeholder={field.placeholder}
    />
  </>);
};

export default Input;
