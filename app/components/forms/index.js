import React from 'react';
import {
  BlockField
} from '../.';

import { useForm } from 'react-hook-form';
import inputComponents from './inputs';

const R = require('ramda');

const Forms = ({
  noLabel,
  formsData,
  defaultValues,
  onChange,
  onSubmit,
  options,
  submitSection,
  columns
}) => {
  const { register, handleSubmit, control, reset, getValues, watch, errors } = useForm({ defaultValues });
  const [visible, setVisible] = React.useState({});

  const getInput = ({ field, form }) => {
    const placeholder = field.placeholder === '__UNDEFINED__' ? field.label : field.placeholder;
    if (!R.has(field.input, inputComponents)) return null;
    return React.createElement(
      inputComponents[field.input], {
        getValues,
        control,
        register,
        field: { ...field, placeholder },
        options,
        errors
      }
    );
  };

  const valuesRef = React.useRef(null);
  const formValues = watch();

  React.useEffect(() => {
    const updateVisible = async (fields, values) => {
      const response = await Promise.all(fields.map(async field => {
        if (R.is(Function, field.handlers.visible)) {
          let value = field.handlers.visible(values);
          if (R.is(Promise, value)) value = await value;
          return { [field.name]: value };
        }
        return { [field.name]: true };
      }));
      setVisible(R.mergeAll(response));
    };

    // * Check if the values changed
    if (R.equals(valuesRef.current, formValues)) return;

    // * Update form visibility
    valuesRef.current = formValues;
    updateVisible(formsData, valuesRef.current);
    if (R.is(Function, onChange)) onChange(valuesRef.current);
  }, [formValues]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={`grid sm:grid-cols-1 md:grid-cols-${columns} gap-1.5`}>
        {formsData.map((field) => {
          if (!visible[field.name]) return null;
          let label = R.when(R.equals('__UNDEFINED__'), R.always(''), field.label);
          if (noLabel) {
            label = '';
          }
          return (
            <BlockField key={field.name} label={label}>
              {getInput({ field, form: { control, register } })}
            </BlockField>
          );
        })}
      </div>
      {submitSection({ reset, getValues })}
    </form>
  );
};

export default Forms;

Forms.defaultProps = {
  columns: 2,
  noLabel: false
};
