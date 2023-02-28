import { gql } from 'apollo-server-express';

const {
  ItemResolver
} = require('../resolver');

module.exports = {
  typeDefs: gql`
    interface MutationResponse {
      ok: Boolean!
      error: String
    }

    type DefaultMutationResponse implements MutationResponse {
      ok: Boolean!
      error: String
    }

    type Mutation {
      initializeBeneficiaries(beneficiaries: BeneficiariesInput!): DefaultMutationResponse
      onSigned(subscriberId: String!): DefaultMutationResponse
      subscriberSurveyAnswers(subscriberId: String!, question1: String!, question2: String!): DefaultMutationResponse
        createItem(item: ItemInput!): DefaultMutationResponse
    }
  `,

  resolvers: {
    Mutation: {
      initializeBeneficiaries: (parent, { beneficiaries }, context) => Promise.resolve(),
      onSigned: (parent, { subscriberId }, context) => Promise.resolve(),
      subscriberSurveyAnswers: (parent, { subscriberId, question1, question2 }, context) => Promise.resolve(),
      createItem: (parent, { item }, context) => ItemResolver(context).create(item)
    },
    MutationResponse: {
      __resolveType () {
        return null;
      }
    }
  }
};
