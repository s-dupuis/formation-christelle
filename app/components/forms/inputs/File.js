import React from 'react';
import { Controller } from 'react-hook-form';
import { UploadFile } from '@@components/input';
import classNames from 'classnames';
const R = require('ramda');

const File = ({ register, field, control, getValues, errors }) => {
  const hasError = R.keys(errors).includes(field.name);
  return (
    <Controller
      name={field.name}
      rules={{ required: field.required }}
      control={control}
      render={({ name, onChange, value }) => {
        return (
          <div className={classNames('f-input', { 'f-input-error': hasError })}>
            <UploadFile
              value={value}
              name="file"
              accept="image/*,.pdf"
              uploadUrl="/upload/file"
              uploadText={field.placeholder}
              onChange={file => onChange([file])}
            />
          </div>
        );
      }}
    />
  );
};

export default File;
