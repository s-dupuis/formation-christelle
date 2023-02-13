import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const SubStep01 = ({
  data,
  subStepTitle,
  onNext
}) => {
  const { control, handleSubmit } = useForm();

  const onSubmit = () => {
  };

  return <form onSubmit={handleSubmit(onSubmit)}>
    <h1>{subStepTitle}</h1>
  </form >;
};

export default SubStep01;
