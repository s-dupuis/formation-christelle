/**
 *
 * WARNING : fichier généré par forms, ne pas le modifier directement
 *
 **/
 
const { gql } = require('apollo-server-express');
const ContractResolver = require(`${process.env.ROOT_DIR}/server/graphql/resolver/ContractResolver`);

module.exports = {
  typeDefs: gql`
    type SubscriberInformationMutationResponse implements MutationResponse {
      ok: Boolean!
      error: String
      
    }

    type Mutation {
      SubscriberInformation(input: SubscriberInformationInput!): SubscriberInformationMutationResponse
    }
  `,

  resolvers: {
    Mutation: {
      SubscriberInformation: (parent, { input }, context) => ContractResolver(context).updateSubscriberInformation(input)
    }
  }
};
