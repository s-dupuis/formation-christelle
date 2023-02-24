import React from 'react';
import { graphql } from 'react-relay';
import Query from '../Query';
import {
  populateChildren
} from './toolbox';

const QItemsQuery = graphql`
    query QItemsQuery {
        items {
            ok
            items {
                id
                name
                category
                group
            }
        }
    }
`;

const QItems = ({
  args,
  children,
  childDataProp
}) => {
  return (
    <Query
      query={QItemsQuery}
      args={args}
      fetchPolicy="network"
      mockKey="QItems"
    >
      {populateChildren(['items'])(children, childDataProp)}
    </Query>
  );
};

export default QItems;

export {
  QItemsQuery
};
