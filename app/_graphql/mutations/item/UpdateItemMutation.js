import {
  commitMutation,
  graphql
} from 'react-relay';

import environment from '../../.';

const mutation = graphql`

    mutation UpdateItemMutation($itemId: String!, $data: ItemInput!) {
        updateItem(itemId: $itemId, data: $data) {
            ok
            error
        }
    }
`;

export default (
  itemId,
  data,
  done
) => {
  const variables = {
    itemId, data
  };

  commitMutation(
    environment(),
    {
      mutation,
      variables,
      onCompleted: ({ updateItem }) => {
        const { ok, error } = updateItem;
        done(ok, error);
      },
      onError: error => {
        console.error(error);
        done(false, error);
      }
    }
  );
};
