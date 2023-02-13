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
mutation CreateSignatureMutation($input: CreateSignatureInput!) {
  CreateSignature(input: $input) {
    ok
    error
    
      
    signerId
      
    
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
      onCompleted: ({ CreateSignature }) => {
        const { ok, error } = CreateSignature;
        done(ok, error, R.omit(['ok', 'error'], CreateSignature));
      },
      onError: err => console.error(err)
    }
  );
};
