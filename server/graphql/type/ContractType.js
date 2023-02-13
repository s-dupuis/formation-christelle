const R = require('ramda');
const { gql } = require('apollo-server-express');

module.exports = {
  typeDefs: gql`
    type ContractSubscriber {
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
    type ContractBeneficiary {
      externalId: String
      civility: CivilityEnum
      beneficiaryType: String
      firstName: String
      lastName: String
      birthDate: String
      fullName: String
      nic: String
    }
    type Payments{
      iban: String
      ribUploadId: String
      ribFilename: String
    }
    type Contract {
      externalId: ID
      effectDate: String
      subscriber: ContractSubscriber
      beneficiaries: [ContractBeneficiary]
      numberOfBeneficiaries: Int
      payments: Payments
    }
  `
};
