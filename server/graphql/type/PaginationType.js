const { gql } = require('apollo-server-express');

module.exports = {
  typeDefs: gql`
    type Pagination {
      total: Int!
      limit: Int!
      page: Int!
      pages: Int!
    }
  `
};
