import React from 'react';
import PropTypes from 'prop-types';

const MoneyFormat = ({ value }) => {
  return <>{value.toLocaleString(undefined, { style: 'currency', currency: 'EUR' })}</>;
};

MoneyFormat.propTypes = {
  value: PropTypes.number.isRequired
};

export default MoneyFormat;
