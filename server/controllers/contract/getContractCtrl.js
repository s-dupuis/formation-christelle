import { logger } from '@fasstech/logger';
import { KO, OK } from '../../graphql/resolver/helpers';

const getContractCtrl = async (contractId) => {

  return {
    ok: true,
    error: null,
    data: {
      effectDate: '2021-08-01T22:00:00.000Z',
      subscriber: {
        id: 'ab0a09af',
        civility: 'M',
        firstName: 'Franck',
        lastName: 'LERY',
        birthDate: '1960-08-01T22:00:00.000Z',
        fullName: '',
        nic: '1600775111111',
        address: '23, rue des ours',
        city: '17300',
        zipCode: 'Royan',
        email: 'franck.lery@email.fr',
        phone: '0607080910'
      },
      beneficiaries: [{
        id: 'db0a09af',
        civility: 'MME',
        firstName: 'Françoise',
        lastName: 'LERY',
        fullName: '',
        nic: '2620775222222'
      }, {
        id: 'cb0a09af',
        civility: 'M',
        firstName: 'Arthur',
        lastName: 'LERY',
        nic: '18010775222222'
      }],
      numberOfBeneficiaries: 3
    }
  };
};

module.exports = getContractCtrl;
