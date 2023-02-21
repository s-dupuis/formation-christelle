import { ContractResolver } from '../resolver';

const { gql } = require('apollo-server-express');

const {
  ItemResolver
} = require('../resolver');

module.exports = {
  typeDefs: gql`
    type Query {
      contract(subscriberId: ID!): Contract
      getBeneficiaries(subscriberId: ID!): Beneficiaries
      getItemById(itemId: ID!): GetItemByIdStatus
    }
  `,
  resolvers: {
    Query: {
      contract: (parent, { subscriberId: contractId }, context) => ContractResolver(context).get(contractId),
      getBeneficiaries: (parent, { subscriberId }, context) => Promise.resolve(),
      getItemById: (parent, { itemId: id }, context) => ItemResolver(context).getById(id)
    }
  }
};
