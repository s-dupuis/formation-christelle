import React from 'react';

const TextArea = ({ inputRef, name, rows, onChange, value, hasError }) => (
  <textarea
    rows={rows}
    className={(hasError ? 'f-textarea-error' : 'f-textarea')}
    name={name}
    onChange={onChange}
    value={value}
  />
);

TextArea.defaultProps = {
  rows: 8
};

export default TextArea;
