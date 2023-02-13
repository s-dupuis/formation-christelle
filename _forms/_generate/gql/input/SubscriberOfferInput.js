/**
 *
 * WARNING : fichier généré par forms, ne pas le modifier directement
 *
 **/
const { gql } = require('apollo-server-express');

module.exports = {
  typeDefs: gql`
    input SubscriberOfferInput {
      offerId: ID!
      subscriberId: String
    }
  `
};