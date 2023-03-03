import { ContractResolver } from '../resolver';

const { gql } = require('apollo-server-express');

const {
  ItemResolver
} = require('../resolver');

const {
  GroupResolver
} = require('../resolver');

module.exports = {
  typeDefs: gql`
    type Query {
      contract(subscriberId: ID!): Contract
      getBeneficiaries(subscriberId: ID!): Beneficiaries
      getItemById(itemId: ID!): GetItemByIdStatus
      items: ItemsStatus
        groups: GroupsStatus
    }
  `,
  resolvers: {
    Query: {
      contract: (parent, { subscriberId: contractId }, context) => ContractResolver(context).get(contractId),
      getBeneficiaries: (parent, { subscriberId }, context) => Promise.resolve(),
      getItemById: (parent, { itemId: id }, context) => ItemResolver(context).getById(id),
      // eslint-disable-next-line no-empty-pattern
      items: (parent, {}, context) => ItemResolver(context).list(),
      // eslint-disable-next-line no-empty-pattern
      groups: (parent, {}, context) => GroupResolver(context).get()
    }
  }
};
