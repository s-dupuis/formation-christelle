const R = require('ramda');
const { gql } = require('apollo-server-express');

module.exports = {
  typeDefs: gql`
      input ItemInput {
          name: String
          category: CategoryEnum
          group: String
      }
  `
};
