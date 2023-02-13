import { isNil, allPass, prop, propEq, not, compose } from 'ramda';

export const isConnected = user => allPass([
  compose(not, isNil, prop('username')),
  compose(not, statusIsPending),
  compose(not, isNil)
])(user);

export const statusIsPending = user => propEq('status', 'pending')(user);
