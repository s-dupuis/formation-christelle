import fs from 'fs';
const R = require('ramda');
const RA = require('ramda-adjunct');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');
const typeDefs = (schemaTypes) => {
  return R.map(R.prop('typeDefs'))(schemaTypes);
};

const resolvers = (types) => {
  const resolvers = R.compose(
    R.mergeAll,
    R.filter(RA.isNotNil),
    R.map(R.prop('resolvers'))
  )(types);

  return resolvers;
};

const loadFiles = (folder) => {
  const path = require('path').join(__dirname, folder);
  return fs.readdirSync(path).map(function (file) {
    return require(`${path}/${file}`);
  });
};

const loadTypes = () => loadFiles('type');
const loadInputs = () => loadFiles('input');
const loadEnums = () => loadFiles('enum');
const schemaTypes = [...loadTypes(), ...loadInputs(), ...loadEnums()];
const formSchema = require('../../_forms/_generate/gql/schemas');

const schema = makeExecutableSchema({
  typeDefs: mergeTypeDefs([typeDefs(schemaTypes), formSchema.typeDefs]),
  resolvers: mergeResolvers([resolvers(schemaTypes), formSchema.resolvers])
});

module.exports = schema;
