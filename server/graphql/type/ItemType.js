const R = require('ramda');
const { gql } = require('apollo-server-express');

module.exports = {
  typeDefs: gql`
        type Item {
            id: ID
            name: String
            category: CategoryEnum
            group: String
        }
    `
};
