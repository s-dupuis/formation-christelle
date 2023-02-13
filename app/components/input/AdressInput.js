import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { BlockField } from '@@components';
import classNames from 'classnames';
import { useForm, Controller } from 'react-hook-form';

const R = require('ramda');

const AdressInput = ({ onChange, value, hasError }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { handleSubmit, control, errors } = useForm({
    defaultValues: R.merge(
      { street: '', zipcode: '', city: '' },
      value
    )
  });

  const errorsList = R.keys(errors);

  const onSave = (data) => {
    onChange(data);
    setIsEditing(false);
  };

  const buttonClasses = classNames({
    'f-circle-btn-blue': isEditing,
    'f-circle-btn': !isEditing
  });

  return (<div className="flex w-full">
    {/* Not editing view */}
    {!isEditing && (
      <div className="flex flex-grow justify-start">
        {R.propOr('', 'street', value)} {R.propOr('', 'zipcode', value)} {R.propOr('', 'city', value)}
      </div>
    )}

    {/* Is editing */}
    {isEditing && (
      <div className="flex-grow grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <BlockField label="Rue" className='flex'>
            <Controller name="street" rules={{ required: true }} control={control} render={({ value, onChange }) => (
              <input
                className={R.includes('street', errorsList) ? 'f-input-red' : 'f-input-gray'}
                value={value}
                onChange={onChange}
              />
            )} />
          </BlockField>

        </div>
        <div>
          <BlockField label="Code postal" className='flex'>
            <Controller name="zipcode" rules={{ required: true }} control={control} render={({ value, onChange }) => (
              <input
                className={R.includes('zipcode', errorsList) ? 'f-input-red' : 'f-input-gray'}
                value={value}
                onChange={onChange}
              />
            )} />
          </BlockField>
        </div>
        <div>
          <BlockField label="Ville" className='flex'>
            <Controller name="city" rules={{ required: true }} control={control} render={({ value, onChange }) => (
              <input
                className={R.includes('city', errorsList) ? 'f-input-red' : 'f-input-gray'}
                value={value}
                onChange={onChange}
              />
            )} />
          </BlockField>
        </div>
      </div>
    )}
    <div className="flex-none mx-2 p-2">
      <button className={buttonClasses} type="button" onClick={isEditing ? handleSubmit(onSave) : () => setIsEditing(R.not) }>
        <img src="/icons/bt-edit.svg" alt=""/>
      </button>
    </div>
  </div>);
};

AdressInput.propTypes = {
  value: PropTypes.exact({
    street: PropTypes.string,
    zipcode: PropTypes.string,
    city: PropTypes.string
  }),
  onChange: PropTypes.func.isRequired,
  hasError: PropTypes.bool
};

AdressInput.defaultProps = {
  hasError: false
};

export default AdressInput;
