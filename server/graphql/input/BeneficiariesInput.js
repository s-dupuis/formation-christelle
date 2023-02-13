const R = require('ramda');
const { gql } = require('apollo-server-express');

module.exports = {
  typeDefs: gql`
    input BeneficiariesInput {
      externalId: String
      subscriber: ContractSubscriberInput
      beneficiaries: [ContractBeneficiaryInput]
    }
  `
};
