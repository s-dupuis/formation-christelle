import React from 'react';

const Hidden = ({ register, field }) => {
  return (<input type="hidden" ref={register({ required: field.required })} name={field.name} />);
};

export default Hidden;
