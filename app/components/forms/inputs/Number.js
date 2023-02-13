import React from 'react';
import ErrorMessage from './helpers/ErrorMessage';

const R = require('ramda');

const Number = ({ register, field, errors }) => {
  const classes = R.keys(errors).includes(field.name) ? 'f-input-red' : 'f-input';
  return (
    <>
      <input type="number" className={classes} ref={register({ required: field.required })} name={field.name} placeholder={field.placeholder}/>
      <ErrorMessage field={field} errors={errors} />
    </>
  );
};

export default Number;
