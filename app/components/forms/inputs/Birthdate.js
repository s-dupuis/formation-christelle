import React from 'react';
import { Controller } from 'react-hook-form';
import classNames from 'classnames';
import ErrorMessage from './helpers/ErrorMessage';
import moment from 'moment';
import { DatePicker } from '@@components/input';
import { datePickerLimitDate } from '@@refs';

const R = require('ramda');

const Birthdate = ({ control, register, field, errors }) => {
  const hasError = R.keys(errors).includes(field.name);

  const validate = R.cond([
    [(v) => moment(v).diff(datePickerLimitDate.maxBirthdate.limit) > 0,
      R.always(datePickerLimitDate.maxBirthdate.message)],
    [(v) => moment(v).diff(datePickerLimitDate.minBirthdate.limit) < 0,
      R.always(datePickerLimitDate.minBirthdate.message)]
  ]);

  return (<Controller
    control={control}
    name={field.name}
    rules={{ required: field.required, validate }}
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

export default Birthdate;
