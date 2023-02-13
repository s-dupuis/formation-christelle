import React from 'react';
import { Controller } from 'react-hook-form';
import classNames from 'classnames';
import moment from 'moment';
import ErrorMessage from './helpers/ErrorMessage';
import { DatePicker } from '@@components/input';
import { datePickerLimitDate } from '@@refs';

const R = require('ramda');

const EffectDate = ({ control, register, field, errors }) => {
  const hasError = R.keys(errors).includes(field.name);

  const minDateTodayRule = ({
    validate: v => moment(v).diff(datePickerLimitDate.todayDate.limit) > 0 || datePickerLimitDate.todayDate.message
  });

  return (<Controller
    control={control}
    name={field.name}
    rules={{ required: field.required, ...minDateTodayRule }}
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

export default EffectDate;
