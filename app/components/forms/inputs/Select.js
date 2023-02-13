import React from 'react';
import { Controller } from 'react-hook-form';
import { SelectOneOption } from '@@components/input';
import ErrorMessage from './helpers/ErrorMessage';

const R = require('ramda');

const Input = ({ register, field, control, getValues, options, errors }) => {
  const _options = R.propOr([], field.source, options);

  return (
    <Controller
      name={field.name}
      control={control}
      rules={{ required: field.required }}
      render={({ onChange, value }) => (<>
        <SelectOneOption
          options={_options}
          placeholder={R.propOr(R.prop('label', field), 'placeholder', field)}
          value={R.find(R.propEq('value', value), _options)}
          onChange={({ value }) => onChange(value)}
          hasError={R.keys(errors).includes(field.name)}
        />
        <ErrorMessage field={field} errors={errors} />
      </>
      )}
    />);
};

export default Input;
