/**
 *
 * WARNING : fichier généré par forms, ne pas le modifier directement
 *
 **/
 
const { gql } = require('apollo-server-express');
const ContractResolver = require(`${process.env.ROOT_DIR}/server/graphql/resolver/ContractResolver`);

module.exports = {
  typeDefs: gql`
    type CreateSignatureMutationResponse implements MutationResponse {
      ok: Boolean!
      error: String
      signerId: String
    }

    type Mutation {
      CreateSignature(input: CreateSignatureInput!): CreateSignatureMutationResponse
    }
  `,

  resolvers: {
    Mutation: {
      CreateSignature: (parent, { input }, context) => ContractResolver(context).createSignature(input)
    }
  }
};
