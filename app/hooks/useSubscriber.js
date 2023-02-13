import React from 'react';
import {
  CreateSignatureMutation,
  SubscriberInformationMutation,
  SubscriberBankInformationMutation,
  SubscriberOfferMutation,
  SubscriberBeneficiaryInformationMutation
} from '@@formsMutations';
import InitializeBeneficiariesMutation from '@@mutations/subscriber/InitializeBeneficiariesMutation';
import SubscriberSurveyAnswersMutation from '@@mutations/subscriber/SubscriberSurveyAnswersMutation';
import { QContractQuery } from '@@queries/QContract';
import { contractToData } from '../lib/contract';
import onSignedMutation from '../_graphql/mutations/subscriber/onSignedMutation';

const R = require('ramda');
const { fetchQuery } = require('react-relay');

const { useRelayEnvironment } = require('react-relay');

const useSubscriber = (subscriberId, data) => {
  const environment = useRelayEnvironment();
  const [subscriberData, setSubscriberData] = React.useState({});
  const [fetchingKey, setFetchingKey] = React.useState(0);

  const withSubscriberId = R.assoc('subscriberId', subscriberId);

  const subscriberIdRef = React.useRef();
  const dataRef = React.useRef();

  React.useEffect(() => {
    if (R.equals(subscriberIdRef.current, subscriberId)) return;
    subscriberIdRef.current = subscriberId;
    if (R.equals(dataRef.current, data)) return;
    dataRef.current = data;
    if (R.contains('subscriberData', data)) getContract({ subscriberId });
  }, [subscriberId, data]);

  React.useEffect(() => {
    getContract(subscriberId);
  }, [fetchingKey]);

  const fetchContract = async () => Promise.resolve({});
  const getContract = async () => {
    const { contract } = await fetchContract();
    setSubscriberData(contractToData(contract));
  };

  const initializeBeneficiaries = async (formData, cb) => {
    InitializeBeneficiariesMutation(formData, async (ok, err, response) => {
      if (ok) {
        const { contract } = await fetchContract();
        await cb(contractToData(contract));
      }
    });
  };

  const updateInformation = (formData, cb) => {
    SubscriberInformationMutation(withSubscriberId(formData), async (ok, err, response) => {
      await fetchContract();
      cb(response);
    });
  };

  const updateOffer = (formData, cb) => {
    SubscriberOfferMutation(withSubscriberId(formData), (ok, err, response) => {
      cb(response);
    });
  };

  const updateBankInformation = (formData, cb) => {
    SubscriberBankInformationMutation(formData, (ok, err, response) => {
      cb(response);
    });
  };

  const updateBeneficiaryInformation = (formData, cb) => {
    SubscriberBeneficiaryInformationMutation(withSubscriberId(formData), (ok, err, response) => {
      cb(response);
    });
  };

  const updateSurveyAnswers = (formData, cb) => {
    console.log(formData);
    SubscriberSurveyAnswersMutation(withSubscriberId(formData), (ok, err, response) => {
      cb(response);
    });
  };

  const createSignature = (cb, onError) => {
    CreateSignatureMutation({ subscriberId }, (ok, error, response) => {
      if (ok && !error) {
        cb(response);
      } else {
        onError();
      }
    });
  };

  const onSigned = () => {
    onSignedMutation({ subscriberId }, (ok, error, response) => {
    });
  };

  return {
    subscriberData,
    updateInformation,
    updateBankInformation,
    updateBeneficiaryInformation,
    updateOffer,
    createSignature,
    initializeBeneficiaries,
    onSigned,
    updateSurveyAnswers
  };
};

export default useSubscriber;
