import { compose, propOr, split, map, prop, join, reject, anyPass, isNil, isEmpty } from 'ramda';

const useBeneficiary = (data) => {
  const lastName = propOr('', 'lastName', data);
  const firstName = propOr('', 'firstName', data);
  const fullName = propOr(null, 'fullName', data);
  const rejectAndJoin = compose(
    join(' '),
    reject(anyPass([isNil, isEmpty]))
  );

  const formattedName = fullName
    ? rejectAndJoin([fullName])
    : rejectAndJoin([lastName, firstName]);

  const getNameArray = () => fullName
    ? split(' ', fullName)
    : [firstName, lastName];

  const initial = compose(
    join(''),
    map(prop(0)),
    getNameArray
  )();

  return {
    formattedName,
    initial
  };
};
export default useBeneficiary;
