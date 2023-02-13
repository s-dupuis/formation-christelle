/**
 *
 * WARNING : fichier généré par forms, ne pas le modifier directement
 *
 **/

const R = require('ramda');
import {
  commitMutation,
  graphql
} from 'react-relay';

import environment from '@@graphql';

const mutation = graphql`
mutation SubscriberBeneficiaryInformationMutation($input: SubscriberBeneficiaryInformationInput!) {
  SubscriberBeneficiaryInformation(input: $input) {
    ok
    error
    
  }
}
`;

export default async (input, done, updater) => {
  const variables = { input };

  commitMutation(
    await environment(),
    {
      mutation,
      variables,
      updater: (proxyStore) => {
        if (R.is(Function, updater)) updater(input, proxyStore);
      },
      onCompleted: ({ SubscriberBeneficiaryInformation }) => {
        const { ok, error } = SubscriberBeneficiaryInformation;
        done(ok, error, R.omit(['ok', 'error'], SubscriberBeneficiaryInformation));
      },
      onError: err => console.error(err)
    }
  );
};
