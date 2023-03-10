const R = require('ramda');
const { gql } = require('apollo-server-express');

module.exports = {
  typeDefs: gql`
    type ResumeStatusDetails {
        service: String
        ok: Boolean
        reports: [String]
    }
    
    type ResumeStatus {
        allServicesAvailables: Boolean
        details: [ResumeStatusDetails]
    }
    
    type ServicesStatus {
      ok: Boolean
      error: String
      resume: ResumeStatus
    }
    type GetItemByIdStatus {
        ok: Boolean
        item: Item
    }
    type ItemsStatus {
        ok: Boolean
        items: [Item]
    }
    type GroupsStatus {
        ok: Boolean
        groups: [Group]
    }
  `,
  resolvers: {
  }
};
