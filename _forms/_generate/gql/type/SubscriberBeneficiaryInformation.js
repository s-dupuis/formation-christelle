/**
 *
 * WARNING : fichier généré par forms, ne pas le modifier directement
 *
 **/
 
const { gql } = require('apollo-server-express');
const ContractResolver = require(`${process.env.ROOT_DIR}/server/graphql/resolver/ContractResolver`);

module.exports = {
  typeDefs: gql`
    type SubscriberBeneficiaryInformationMutationResponse implements MutationResponse {
      ok: Boolean!
      error: String
      
    }

    type Mutation {
      SubscriberBeneficiaryInformation(input: SubscriberBeneficiaryInformationInput!): SubscriberBeneficiaryInformationMutationResponse
    }
  `,

  resolvers: {
    Mutation: {
      SubscriberBeneficiaryInformation: (parent, { input }, context) => ContractResolver(context).updateSubscriberBeneficiaryInformation(input)
    }
  }
};
