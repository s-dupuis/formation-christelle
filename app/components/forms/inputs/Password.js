import React from 'react';
import ErrorMessage from './helpers/ErrorMessage';
const R = require('ramda');

const Input = ({ register, field, errors }) => {
  const classes = R.keys(errors).includes(field.name) ? 'f-input-red' : 'f-input';
  return (<>
    <input className={classes} ref={register({ required: field.required })}type="password" name={field.name} placeholder={field.placeholder}/>
    <ErrorMessage field={field} errors={errors} />
  </>
  );
};

export default Input;
