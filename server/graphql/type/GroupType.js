const { gql } = require('apollo-server-express');

module.exports = {
  typeDefs: gql`
      type Group {
          label: String
          value: String
      }
  `
};
