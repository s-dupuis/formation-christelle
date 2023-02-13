module.exports = {
  schema: './schema.graphql',
  src: '.',
  include: ['./app/**', './_forms/_generate/gql/appMutation/**'],
  persistOutput: './persisted-queries.json'
};
