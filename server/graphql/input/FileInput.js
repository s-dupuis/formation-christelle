const { gql } = require('apollo-server-express');

module.exports = {
  typeDefs: gql`
    input FileInput {
      uploadId: ID!
      fileName: String!
    }
  `
};
