import React from 'react';
import propTypes from 'prop-types';

const R = require('ramda');

const ColoredIcon = ({ icon, color, className, width, height }) => {
  const bgColor = R.cond([
    [R.equals('pink'), R.always('#E2007A')],
    [R.equals('blue'), R.always('#ff41ae')],
    [R.equals('gray'), R.always('#66788A')],
    [R.or(R.isNil, R.isEmpty), R.always('#66788A')],
    [R.T, R.always(color)]
  ])(color);

  return <div className={className} style={{
    height,
    width,
    mask: `url(/icons/${icon} no-repeat center / contain`,
    WebkitMask: `url(/icons/${icon}) no-repeat center / contain`,
    backgroundColor: bgColor
  }}>

  </div>;
};

ColoredIcon.propType = {
  icon: propTypes.string.isRequired,
  color: propTypes.string,
  width: propTypes.number,
  height: propTypes.number,
  className: propTypes.string
};

ColoredIcon.defaultProps = {
  width: 18,
  height: 18
};

export default ColoredIcon;
