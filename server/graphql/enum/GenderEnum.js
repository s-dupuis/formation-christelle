const { gql } = require('apollo-server-express');

module.exports = {
  typeDefs: gql`
      enum GenderEnum {
          M
          F
      }
  `
};
