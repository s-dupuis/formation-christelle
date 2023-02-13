const { gql } = require('apollo-server-express');

module.exports = {
  typeDefs: gql`
    enum UserSessionRoleEnum {
      TIERS
      APPORTEUR
      ADMIN
    }
  `
};
