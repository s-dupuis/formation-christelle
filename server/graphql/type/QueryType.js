import { ContractResolver } from '../resolver';

const { gql } = require('apollo-server-express');

const {
  UserResolver
} = require('../resolver');

module.exports = {
  typeDefs: gql`
    type Query {
      contract(subscriberId: ID!): Contract
      getBeneficiaries(subscriberId: ID!): Beneficiaries
    }
  `,
  resolvers: {
    Query: {
      contract: (parent, { subscriberId: contractId }, context) => ContractResolver(context).get(contractId),
      getBeneficiaries: (parent, { subscriberId }, context) => Promise.resolve()
    }
  }
};
