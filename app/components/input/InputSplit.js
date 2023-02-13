import {
  both,
  is,
  path,
  pathOr,
  prop,
  reduce,
  toLower,
  toUpper,
  when,
  length,
  map,
  join,
  compose,
  slice,
  mapObjIndexed,
  values,
  mergeAll,
  mergeLeft
} from 'ramda';
import React, { useRef, useState } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';

const PATTERN = 'pattern';
const MAX_LENGTH = 'maxLength';
const TRANSFORM = 'transform';
const VALIDATOR = 'validator';

const defaultSizes = {
  [MAX_LENGTH]: Infinity,
  [PATTERN]: null,
  [TRANSFORM]: null,
  [VALIDATOR]: null
};

// Component Generique input
const GenericInput = (props) => <input {...props} />;

// Récupération du nom d'un input
const getInputName = (i) => `n${i}`;

/**
 * Defined size structure
 * @param {*} sizes
 * [
 *  {
 *    maxLength: null,
 *    pattern: null,
 *    tranform: null,
 *    validator: null
 *  }
 * ]
 */
const formatSizes = (sizes) => reduce(
  (acc, value) => {
    if (is(Number, value)) return [...acc, { ...defaultSizes, maxLength: value }];
    return [...acc, { ...defaultSizes, ...value }];
  },
  [],
  sizes
);

/**
 * Format state with default value
 * @param {array} sizes
 * {
 *  n0: '',
 *  n1: '',
 *  n2: ''
 * }
 */
const formatDefaultValues = (sizes) => {
  let count = 0;
  return reduce((acc) => ({ ...acc, [getInputName(count++)]: '' }), {}, sizes);
};

/**
 * Format state with sizes values
 * @param {array} sizes
 * {
 *  n0: 'ABCD',
 *  n1: '123',
 * }
 */
const formatValues = (value, sizes) => {
  const regex = compose(
    join(''),
    map(item => prop(PATTERN, item) ? `(${prop(PATTERN, item)})` : `(\\w{${prop(MAX_LENGTH, item)}})?`)
  )(sizes);
  const matches = length(value) ? value.match(new RegExp(regex, 'i')) : null;
  if (!length(matches)) return {};

  return compose(
    mergeAll,
    values,
    mapObjIndexed((match, index) => ({ [getInputName(index)]: match })),
    slice(1, Infinity)
  )(matches);
};

export const useInputSplit = ({ sizes, transform, validator, value, onChange }) => {
  const newSizes = formatSizes(sizes);

  const ref = useRef();
  const [state, setState] = useState({
    ...formatDefaultValues(newSizes),
    ...formatValues(value, newSizes)
  });

  const getSizeProp = (arrayPath) => path(arrayPath)(newSizes);
  const getMaxLength = (index) => getSizeProp([index, MAX_LENGTH]);
  const getValidator = (index) => getSizeProp([index, VALIDATOR]);
  const getTransform = (index) => getSizeProp([index, TRANSFORM]);
  const getValues = value => values(value);
  const concatValues = value => join('', getValues(value));

  const handleChange = (index) => (e) => {
    const value = e.target.value;
    if (!checkMaxLength(value, getMaxLength(index))) return null;
    let newValue = checkValidator(value, index);
    newValue = transformValue(newValue, index);
    const mergedValues = mergeLeft({ [getInputName(index)]: newValue }, state);
    setState(mergedValues);
    const children = pathOr([], ['current', 'children'], ref);

    // Go to next input
    when(
      both(prop(index + 1), () => length(newValue) === getMaxLength(index)),
      () => children[index + 1].focus()
    )(pathOr([], ['current', 'children'], ref));

    if (is(Function, onChange)) {
      onChange(concatValues(mergedValues), getValues(mergedValues));
    }
  };

  const checkMaxLength = (value, len) => value.length <= len;
  const checkValidator = (value, index) => {
    const regex = getValidator(index) || validator;
    if (value && regex && !(new RegExp(regex, 'gi')).test(value)) {
      return prop(getInputName(index), state);
    }
    return value;
  };

  const transformValue = (value, index) => {
    transform = getTransform(index) || transform;
    if (is(Function, transform)) {
      return transform(value);
    }

    if (is(String, transform)) {
      let newValue;

      switch (transform) {
        case 'uppercase':
          newValue = toUpper(value);
          break;
        case 'lowercase':
          newValue = toLower(value);
          break;
        default:
          newValue = value;
      }
      return newValue;
    }

    return value;
  };

  return {
    state,
    ref,
    getInputName,
    handleChange
  };
};

const InputSplit = ({
  sizes,
  transform,
  Component,
  value,
  onChange,
  validator,
  className,
  isValid
}) => {
  const {
    state,
    ref,
    getInputName,
    handleChange
  } = useInputSplit({ sizes, transform, validator, value, onChange });

  const classnames = classNames(className, 'inputs-format', 'grid', 'gap-4', `grid-cols-${sizes.length}`);
  const Input = is(Function, Component) ? Component : GenericInput;
  return (
    <div ref={ref} className={classnames}>
      {Object.keys(state).map((v, i) => (
        <Input
          key={i}
          className={classNames('f-iban-cell', { 'f-iban-cell-error': !isValid })}
          value={state[getInputName(i)]}
          onChange={handleChange(i)} />
      ))}
    </div>
  );
};

InputSplit.propTypes = {
  sizes: propTypes.array.isRequired,
  transform: propTypes.oneOfType([propTypes.string, propTypes.func]),
  Component: propTypes.func,
  className: propTypes.string,
  value: propTypes.string,
  validator: propTypes.string,
  onChange: propTypes.func,
  isValid: propTypes.bool
};

export default InputSplit;
