import { commitMutation } from 'react-relay';
import GQLEnvironment from './Environment';
const R = require('ramda');

const mutation = ({
  environment,
  gqlMutation,
  variables,
  handlers,
  mockData
}) => {
  if (R.isNil(handlers)) handlers = {};
  if (process.env.MOCK_ENABLED === 'true' && R.is(Function, mockData)) return mockData(variables);
  commitMutation(
    R.when(R.isNil, R.always(GQLEnvironment.get()), environment), {
      mutation: gqlMutation,
      variables,
      ...handlers
    });
};

export default mutation;
