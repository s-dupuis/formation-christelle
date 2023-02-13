import React from 'react';
import classNames from 'classnames';

const R = require('ramda');

const Text = ({ register, field, errors }) => {
  const hasError = R.keys(errors).includes(field.name);

  return (<>
    <input
      className={classNames('f-input', { 'f-input-error': hasError })}
      ref={register({ required: field.required })} name={field.name}
      placeholder={field.placeholder} />
  </>
  );
};

export default Text;
