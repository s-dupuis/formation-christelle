/**
 *
 * WARNING : fichier généré par forms, ne pas le modifier directement
 *
 **/
const { gql } = require('apollo-server-express');

module.exports = {
  typeDefs: gql`
    input SubscriberBeneficiaryInformationInput {
      subscriberId: String
      externalId: String!
      beneficiaryType: BeneficiaryEnum!
      civility: CivilityEnum!
      firstName: String!
      lastName: String!
      birthDate: String!
      nic: String
    }
  `
};