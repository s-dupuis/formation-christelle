import React from 'react';
const R = require('ramda');

const BlockField = ({ label, value, children }) => (
  <div className='f-block-field'>
    <div className="f-block-field-label">{label}</div>
    {R.isNil(children) && <div>{value}</div>}
    {!R.isNil(children) && children}
  </div>
);

export default BlockField;
