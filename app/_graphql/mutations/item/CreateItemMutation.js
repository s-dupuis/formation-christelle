import {
  commitMutation,
  graphql
} from 'react-relay';

import environment from '../../.';

const mutation = graphql`
    mutation CreateItemMutation($item: ItemInput!) {
        createItem(item: $item) {
            ok
            error
        }
    }
`;

export default (
  item,
  done
) => {
  const variables = {
    item
  };

  commitMutation(
    environment(),
    {
      mutation,
      variables,
      onCompleted: ({ createItem }) => {
        const { ok, error } = createItem;
        done(ok, error);
      },
      onError: error => {
        console.error(error);
        done(false, error);
      }
    }
  );
};
