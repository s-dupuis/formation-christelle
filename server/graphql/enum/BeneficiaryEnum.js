const { gql } = require('apollo-server-express');

module.exports = {
  typeDefs: gql`
      enum BeneficiaryEnum {
          A
          C
          E
          K
          L
          S
          T
          U
      }
  `
};
