import React from 'react';
import { Controller } from 'react-hook-form';
import Switch from 'rc-switch';
import ErrorMessage from './helpers/ErrorMessage';

const Input = ({ control, register, field, errors }) => (
  <Controller
    name="isManager"
    control={control}
    rules={{ required: field.required }}
    render={({ onChange, value }) => (<>
      <Switch
        checked={value}
        onChange={onChange}
      />
      <ErrorMessage field={field} errors={errors} />
    </>
    )}
  />
);

export default Input;
