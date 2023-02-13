import React from 'react';
const R = require('ramda');

const Attachements = ({
  max,
  files,
  onChange
}) => {
  return (
    <ul className="f-attachments">
      {files.map(({ fileName, uploadId }) => (
        <li key={uploadId}>{fileName}
          <div onClick={() => onChange(R.filter(R.compose(R.not, R.propEq('uploadId', uploadId)), files))}><img src="/icon/cross.svg"/></div>
        </li>
      ))}
    </ul>
  );
};

export default Attachements;

Attachements.defaultProps = {
  max: undefined
};
