import React, { useState, useEffect } from 'react';
import { BlockField, Badge } from '@@components';
import InputSplit from './InputSplit';

const R = require('ramda');
const IBAN = require('iban');

const IbanInput = ({
  checkIsValid,
  onChange,
  value,
  hasError
}) => {
  const [ibanIsValid, setIbanIsValid] = useState(false);

  const $onChange = (v) => {
    setIbanIsValid(IBAN.isValid(v));
    onChange(v);
  };

  return (
    <InputSplit
      isValid={ibanIsValid}
      sizes={[4, 4, 4, 4, 4, 4, 3]}
      tranform={'uppercase'}
      value={value}
      onChange={$onChange}
    />
  );
};

IbanInput.defaultProps = {
  checkIsValid: true
};

export default IbanInput;
