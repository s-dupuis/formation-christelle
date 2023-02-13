import React from 'react';
import { Controller } from 'react-hook-form';
import { RadioInput } from '@@components/input';
import ErrorMessage from './helpers/ErrorMessage';

const Input = ({ field, control, options, errors }) => {
  return (<Controller
    name={field.name}
    control={control}
    rules={{ required: field.required }}
    render={({ onChange, value }) => (<>
      <RadioInput
        onChange={onChange}
        name={field.name}
        value={value}
        options={options[field.source]}/>
      <ErrorMessage field={field} errors={errors} />
    </>)}
  />);
};

export default Input;
