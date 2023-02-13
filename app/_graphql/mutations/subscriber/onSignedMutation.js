import {
  commitMutation,
  graphql
} from 'react-relay';

import environment from '../../.';

const mutation = graphql`
  mutation onSignedMutation($subscriberId: String!) {
    onSigned(subscriberId: $subscriberId) {
      ok
      error
    }
  }
`;
export default ({ subscriberId }, done) => {
  const variables = {
    subscriberId
  };

  commitMutation(
    environment(),
    {
      mutation,
      variables,
      onCompleted: ({ onSigned }) => {
        const { ok, error } = onSigned;
        done(ok, error);
      },
      onError: error => {
        console.error(error);
        done(false, error);
      }
    }
  );
};
