import React from 'react';
import { Controller } from 'react-hook-form';
import classNames from 'classnames';
import ErrorMessage from './helpers/ErrorMessage';
import { DatePicker } from '@@components/input';

const R = require('ramda');

const DateInput = ({ control, register, field, errors }) => {
  const hasError = R.keys(errors).includes(field.name);

  return (<Controller
    control={control}
    name={field.name}
    rules={{ required: field.required }}
    render={({ onChange, value }) => (
      <>
        <div className={classNames('f-input', { 'f-input-error': hasError })}>
          <DatePicker onChange={onChange} value={value} field={field}/>
        </div>
        <ErrorMessage field={field} errors={errors} />
      </>
    )}
  />);
};

export default DateInput;
