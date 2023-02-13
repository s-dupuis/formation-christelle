import moment from 'moment';

moment.locale('fr');

const { OK, KO } = require('./helpers');
const R = require('ramda');
const {
  getContractCtrl
} = require('../../controllers/contract');
const { logger } = require('@fasstech/logger');

const ContractResolver = (context) => (() => {
  const get = async (contractId) => {
    const { ok, err, data } = await getContractCtrl(contractId);
    console.log(JSON.stringify(data, null, 1));
    if (ok) return data;
  };

  return {
    get,
  };
})();

module.exports = ContractResolver;
