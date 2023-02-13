const { gql } = require('apollo-server-express');

module.exports = {
  typeDefs: gql`
      enum CivilityEnum {
          M
          MME
      }
  `
};
