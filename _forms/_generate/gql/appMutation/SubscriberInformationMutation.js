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
mutation SubscriberInformationMutation($input: SubscriberInformationInput!) {
  SubscriberInformation(input: $input) {
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
      onCompleted: ({ SubscriberInformation }) => {
        const { ok, error } = SubscriberInformation;
        done(ok, error, R.omit(['ok', 'error'], SubscriberInformation));
      },
      onError: err => console.error(err)
    }
  );
};
