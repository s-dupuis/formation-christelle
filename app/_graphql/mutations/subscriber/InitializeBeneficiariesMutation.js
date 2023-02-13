import {
  commitMutation,
  graphql
} from 'react-relay';

import environment from '../../.';

const mutation = graphql`
  mutation InitializeBeneficiariesMutation($beneficiaries: BeneficiariesInput!) {
    initializeBeneficiaries(beneficiaries: $beneficiaries) {
      ok
      error
    }
  }
`;

export default (
  beneficiaries,
  done
) => {
  const variables = {
    beneficiaries
  };

  commitMutation(
    environment(),
    {
      mutation,
      variables,
      onCompleted: ({ initializeBeneficiaries }) => {
        const { ok, error } = initializeBeneficiaries;
        done(ok, error);
      },
      onError: error => {
        console.error(error);
        done(false, error);
      }
    }
  );
};
