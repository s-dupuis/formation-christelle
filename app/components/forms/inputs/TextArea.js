import React from 'react';
import { TextArea } from '@@components/input';
import { Controller } from 'react-hook-form';
import ErrorMessage from './helpers/ErrorMessage';

const R = require('ramda');

const Input = ({ control, register, field, errors }) => (
  <Controller
    control={control}
    name={field.name}
    rules={{ required: field.required }}
    render={({ onChange, value }) => (<>
      <TextArea
        name={field.name}
        inputRef={register}
        placeholder={field.placeholder}
        value={value}
        onChange={onChange}
        hasError={R.keys(errors).includes(field.name)}
      />
      <ErrorMessage field={field} errors={errors} />
    </>
    )}
  />
);

export default Input;
