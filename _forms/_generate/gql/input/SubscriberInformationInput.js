/**
 *
 * WARNING : fichier généré par forms, ne pas le modifier directement
 *
 **/
const { gql } = require('apollo-server-express');

module.exports = {
  typeDefs: gql`
    input SubscriberInformationInput {
      effectDate: String!
      civility: CivilityEnum!
      firstName: String!
      lastName: String!
      birthDate: String!
      birthName: String
      nic: String
      address: String!
      city: String!
      zipCode: String!
      email: String!
      phone: String!
      subscriberId: String
      externalId: String!
      isBeneficiary: String
    }
  `
};