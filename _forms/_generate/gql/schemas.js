/**
 *
 * WARNING : fichier généré par forms, ne pas le modifier directement
 *
 **/

const R = require('ramda');
const RA = require('ramda-adjunct');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');

const typeDefs = (schemaTypes) => {
  return R.map(R.prop('typeDefs'))(schemaTypes);
};

const resolvers = (types) => {
  const resolvers = R.compose(
    R.filter(RA.isNotNil),
    R.map(R.prop('resolvers'))
  )(types);

  return resolvers;
};

const _input = name => require(`./input/${name}.js`);
const _type = name => require(`./type/${name}.js`);

const schemaTypes = [

  _input('CreateSignatureInput'),

  _input('SubscriberBankInformationInput'),

  _input('SubscriberBeneficiaryInformationInput'),

  _input('SubscriberInformationInput'),

  _input('SubscriberOfferInput'),


  _type('CreateSignature'),

  _type('SubscriberBankInformation'),

  _type('SubscriberBeneficiaryInformation'),

  _type('SubscriberInformation'),

  _type('SubscriberOffer'),

];

module.exports = ({
  typeDefs: mergeTypeDefs(typeDefs(schemaTypes)),
  resolvers: mergeResolvers(resolvers(schemaTypes))
});