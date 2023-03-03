import React from 'react';
import { graphql } from 'react-relay';
import Query from '../Query';
import {
  populateChildren
} from './toolbox';

const QGroupsQuery = graphql`
    query QGroupsQuery {
        groups {
            ok
            groups {
                label
                value
            } 
        }
    }
`;

const QGroups = ({
  args,
  children,
  childDataProp
}) => {
  return (
    <Query
      query={QGroupsQuery}
      args={args}
      fetchPolicy="network"
      mockKey="QGroups"
    >
      {populateChildren(['groups'])(children, childDataProp)}
    </Query>
  );
};

export default QGroups;

export {
  QGroupsQuery
};
