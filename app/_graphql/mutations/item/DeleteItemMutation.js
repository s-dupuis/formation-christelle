import {
  commitMutation,
  graphql
} from 'react-relay';

import environment from '../../.';

const mutation = graphql`
    
    mutation DeleteItemMutation($itemId: String!) {
        deleteItem(itemId: $itemId) {
            ok
            error
        }
    }
`;

export default (
  itemId,
  done
) => {
  const variables = {
    itemId
  };

  commitMutation(
    environment(),
    {
      mutation,
      variables,
      onCompleted: ({ deleteItem }) => {
        const { ok, error } = deleteItem;
        done(ok, error);
      },
      onError: error => {
        console.error(error);
        done(false, error);
      }
    }
  );
};
