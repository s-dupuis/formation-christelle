import React from 'react';
import { graphql } from 'react-relay';
import Query from '../Query';
import {
  populateChildren
} from './toolbox';

const QContractQuery = graphql`
  query QContractQuery($subscriberId: ID!) {
    contract(subscriberId: $subscriberId) {
      externalId
      effectDate
      numberOfBeneficiaries
      subscriber {
        externalId
        isBeneficiary
        civility
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
        birthDate
      }
      numberOfBeneficiaries
      payments {
        iban
        ribUploadId
        ribFilename
      }
    }
  }
`;

const QContract = ({
  args,
  children,
  childDataProp,
  mockData
}) => {
  return (
    <Query
      query={QContractQuery}
      args={args}
      fetchPolicy="network"
      mockKey="QContract"
      mockData={mockData}
    >
      {populateChildren(['contract'])(children, childDataProp)}
    </Query>
  );
};

export default QContract;

export {
  QContractQuery
};
