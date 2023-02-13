/**
 *
 * WARNING : fichier généré par forms, ne pas le modifier directement
 *
 **/
 
const { gql } = require('apollo-server-express');
const ContractResolver = require(`${process.env.ROOT_DIR}/server/graphql/resolver/ContractResolver`);

module.exports = {
  typeDefs: gql`
    type SubscriberOfferMutationResponse implements MutationResponse {
      ok: Boolean!
      error: String
      
    }

    type Mutation {
      SubscriberOffer(input: SubscriberOfferInput!): SubscriberOfferMutationResponse
    }
  `,

  resolvers: {
    Mutation: {
      SubscriberOffer: (parent, { input }, context) => ContractResolver(context).updateSubscriberOffer(input)
    }
  }
};
