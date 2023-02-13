import { Controller } from 'react-hook-form';
import { IbanInput } from '@@components/input';
import classNames from 'classnames';
import React from 'react';
import ErrorMessage from './helpers/ErrorMessage';

const R = require('ramda');

const Input = ({ register, field, control, errors }) => {
  const hasError = R.keys(errors).includes(field.name);
  return (
    <div className={classNames('text-center f-input', { 'f-input-error': hasError })}>
      <Controller
        name={field.name}
        control={control}
        rules={{ required: field.required }}
        render={({ onChange, value }) => (
          <IbanInput
            checkIsValid={true}
            hasError={hasError}
            onChange={onChange}
            value={value}
          />
        )}
      />
    </div>
  );
};

export default Input;
