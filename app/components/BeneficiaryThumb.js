import React from 'react';

const thumbColors = [
  '#009ADC', '#FF41AE', '#FE9E09',
  '#009ADC', '#FF41AE', '#FE9E09'
];

const BeneficiaryThumb = ({ thumbColorIndex, initial }) => {
  return <div style={{ backgroundColor: thumbColors[thumbColorIndex] }} className="f-beneficiary-thumb">{initial}</div>;
};

export default BeneficiaryThumb;
