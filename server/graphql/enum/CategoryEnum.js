const { gql } = require('apollo-server-express');

module.exports = {
  typeDefs: gql`
        enum CategoryEnum {
            A
            B
            C
            D
        }
    `
};
