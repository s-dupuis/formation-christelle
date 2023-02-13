import React from 'react';
import { graphql } from 'react-relay';
import Query from '../Query';
import {
  populateChildren
} from './toolbox';

const QBeneficiariesQuery = graphql`
  query QBeneficiariesQuery($subscriberId: ID!) {
    getBeneficiaries(subscriberId: $subscriberId) {
      id
      subscriber {
        externalId
        civility
        isBeneficiary
        firstName
        lastName
        fullName
        birthName
        birthDate
        nic
        address
        zipCode
        city
        email
        phone
      }
      beneficiaries {
        externalId
        civility
        beneficiaryType
        firstName
        lastName
        fullName
        nic
      }
      numberOfBeneficiaries
    }
  }
`;

const QGetBeneficiaries = ({
  args,
  children,
  childDataProp,
  mockData
}) => {
  return (
    <Query
      query={QBeneficiariesQuery}
      args={args}
      fetchPolicy="network"
      mockKey="QgetBeneficiaries"
      mockData={mockData}
    >
      {populateChildren(['getBeneficiaries'])(children, childDataProp)}
    </Query>
  );
};

export default QGetBeneficiaries;

export {
  QBeneficiariesQuery
};
