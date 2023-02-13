import React from 'react';
import classNames from 'classnames';
import { keys } from 'ramda';
import ErrorMessage from './helpers/ErrorMessage';
import IBAN from 'iban';

const Iban = ({ register, field, errors }) => {
  const hasError = keys(errors).includes(field.name);
  const ruleIban = {
    validate: v => IBAN.isValid(v) || 'Le numéro IBAN n\'est pas valide'
  };

  return <>
    <input
      className={classNames('f-input', { 'f-input-error': hasError })}
      ref={register({ required: field.required, ...ruleIban })} name={field.name}
      placeholder={field.placeholder} />
    <ErrorMessage field={field} errors={errors} />
  </>;
};

export default Iban;
