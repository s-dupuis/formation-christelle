import * as R from 'ramda';

const contractToData = R.pick(['subscriber', 'beneficiaries', 'numberOfBeneficiaries', 'externalId', 'payments', 'effectDate']);

export {
  contractToData
};
