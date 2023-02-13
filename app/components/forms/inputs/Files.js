import React from 'react';
import { Controller } from 'react-hook-form';
import { Attachments, UploadFile } from '@@components/input';

const Input = ({ register, field, control, getValues }) => (
  <Controller name={field.name} control={control} render={({ name, onChange, value }) => (
    <>
      <Attachments
        files={value || []}
        onChange={onChange}
      />
      <UploadFile
        name="file"
        uploadUrl="/upload/file"
        uploadText={field.placeholder}
        onChange={file => { onChange([...(getValues(name) || []), file]); }}
      />
    </>
  )}/>
);

export default Input;
