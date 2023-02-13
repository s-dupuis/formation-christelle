import { compose, toString, replace } from 'ramda';

const numberToPriceString = compose(
  replace('.', ','),
  n => n.toFixed(2)
);

export {
  numberToPriceString
};
