const R = require('ramda');
const { gql } = require('apollo-server-express');

module.exports = {
  typeDefs: gql`
    type Beneficiaries {
      id: ID
      subscriber: ContractSubscriber
      beneficiaries: [ContractBeneficiary]
      numberOfBeneficiaries: Int
    }
  `
};
