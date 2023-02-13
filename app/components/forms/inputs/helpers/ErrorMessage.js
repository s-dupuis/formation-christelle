import React from 'react';

const R = require('ramda');

const getErrorMessage = (field, errors) => R.cond([
  [R.pathEq([field.name, 'type'], 'required'), R.always(`Le champ "${field.label}" est requis.`)],
  [R.compose(R.not, R.isEmpty, R.path([field.name, 'message'])), R.path([field.name, 'message'])],
  [R.T, R.always(null)]
])(errors);

const ErrorMessage = ({ field, errors }) => {
  const message = getErrorMessage(field, errors);

  if (message === null) { return null; }
  return <div className="text-red-600">
    {message}
  </div>;
};

export default ErrorMessage;
