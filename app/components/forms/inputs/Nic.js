import React from 'react';
import moment from 'moment';
import classNames from 'classnames';
import { equals, indexOf, replace, or, splitAt, keys, length } from 'ramda';
import { isNilOrEmpty } from 'ramda-adjunct';
import ErrorMessage from './helpers/ErrorMessage';

const validateNIR = (nir, birthDate) => {
  const getFormattedBirthDate = (format) => moment(birthDate, 'YYYY-MM-DD').format(format);
  if (equals(15, length(nir))) {
    // Check if nir has letter
    if (equals(5, indexOf('2B', nir))) {
      nir = replace('2B', 18, nir);
    } else if (equals(5, indexOf('2A', nir))) {
      nir = replace('2A', 19, nir);
    }
    const birthYearMonth = getFormattedBirthDate('YYMM');
    const isNIRDateRight = equals(1, indexOf(birthYearMonth, nir));
    if (or(isNIRDateRight, !birthDate)) {
      const luhn = value => 97 - ((parseInt(value)) % 97);
      const [nirWithoutKey, nirKey] = splitAt(13, nir);
      return equals(parseInt(nirKey), luhn(nirWithoutKey));
    }
  }
  return isNilOrEmpty(nir);
};

const Nic = ({ register, field, errors }) => {
  const hasError = keys(errors).includes(field.name);
  const ruleSocialNumberLuhn = ({
    validate: v => validateNIR(v, false) || 'Numéro de Sécurité sociale invalide'
  });

  return <>
    <input
      className={classNames('f-input', { 'f-input-error': hasError })}
      ref={register({ required: field.required, ...ruleSocialNumberLuhn })} name={field.name}
      placeholder={field.placeholder} />
    <ErrorMessage field={field} errors={errors} />
  </>;
};

export default Nic;
