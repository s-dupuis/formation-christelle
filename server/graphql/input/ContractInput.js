const R = require('ramda');
const { gql } = require('apollo-server-express');

module.exports = {
  typeDefs: gql`
    input ContractSubscriberInput {
      id: ID
      externalId: String
      isBeneficiary: Boolean
      civility: CivilityEnum
      firstName: String
      lastName: String
      fullName: String
      birthName: String
      birthDate: String
      nic: String
      address: String
      city: String
      zipCode: String
      email: String
      phone: String
    }
    input ContractBeneficiaryInput {
      id: ID
      externalId: String
      civility: CivilityEnum
      beneficiaryType: String
      firstName: String
      lastName: String
      birthDate: String
      fullName: String
      nic: String
    }
    input ContractInput {
      externalId: ID
      effectDate: String
      subscriber: ContractSubscriberInput
      beneficiaries: [ContractBeneficiaryInput]
      numberOfBeneficiaries: Int
    }
  `
};
