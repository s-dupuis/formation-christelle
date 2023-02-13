import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

import { AdressInput } from '@@components/input';
import ErrorMessage from './helpers/ErrorMessage';

const R = require('ramda');

const Address = ({ register, field, control, errors }) => {
  const hasError = R.keys(errors).includes(field.name);

  return (<Controller
    name={field.name}
    control={control}
    rules={{ required: field.required }}
    render={({ onChange, value }) => (<>
      <ErrorMessage field={field} errors={errors} />
      <AdressInput hasError={hasError} onChange={onChange} value={value}/>
    </>)}
  />);
};

Address.propTypes = {
};

Address.defaultProps = {
};

export default Address;
