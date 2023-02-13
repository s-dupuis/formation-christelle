import React from 'react';
import { useDropzone } from 'react-dropzone';
import fetch from 'node-fetch';
import FormData from 'form-data';
import { reduceFileName } from '../../lib/reduceFileName';
const R = require('ramda');
const UploadFile = ({
  name,
  uploadUrl,
  value,
  types,
  onError,
  uploadText,
  onChange,
  accept
}) => {
  const onDrop = React.useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append(name, file, file.name);
    const response = await fetch(uploadUrl, {
      method: 'POST',
      body: formData
    });
    if (response.ok) {
      const { uploadId, fileName } = await response.json();
      onChange({ uploadId, fileName });
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    noDrag: true,
    accept
  });

  const fileName = R.path([0, 'fileName'], value);
  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div className="f-link">{reduceFileName(fileName || uploadText)}</div>
      </div>
    </div>
  );
};

UploadFile.defaultProps = {
  types: [],
  onFileUploaded: undefined,
  uploadText: 'veuillez déposer ici le fichier'
};

export default UploadFile;
