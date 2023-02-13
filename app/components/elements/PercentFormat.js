import React from 'react';
import PropTypes from 'prop-types';

const PercentFormat = ({ value, fractionDigits }) => {
  return (<>{Number(value / 100).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: fractionDigits })}</>);
};

PercentFormat.propTypes = {
  value: PropTypes.number,
  fractionDigits: PropTypes.number
};

PercentFormat.defaultProps = {
  fractionDigits: 2
};

export default PercentFormat;
