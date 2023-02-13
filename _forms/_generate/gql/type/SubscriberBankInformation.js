/**
 *
 * WARNING : fichier généré par forms, ne pas le modifier directement
 *
 **/
 
const { gql } = require('apollo-server-express');
const ContractResolver = require(`${process.env.ROOT_DIR}/server/graphql/resolver/ContractResolver`);

module.exports = {
  typeDefs: gql`
    type SubscriberBankInformationMutationResponse implements MutationResponse {
      ok: Boolean!
      error: String
      
    }

    type Mutation {
      SubscriberBankInformation(input: SubscriberBankInformationInput!): SubscriberBankInformationMutationResponse
    }
  `,

  resolvers: {
    Mutation: {
      SubscriberBankInformation: (parent, { input }, context) => ContractResolver(context).updateSubscriberBankInformation(input)
    }
  }
};
