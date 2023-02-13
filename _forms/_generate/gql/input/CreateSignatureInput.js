/**
 *
 * WARNING : fichier généré par forms, ne pas le modifier directement
 *
 **/
const { gql } = require('apollo-server-express');

module.exports = {
  typeDefs: gql`
    input CreateSignatureInput {
      subscriberId: String
    }
  `
};