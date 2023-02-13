/**
 *
 * WARNING : fichier généré par forms, ne pas le modifier directement
 *
 **/
const R = require('ramda');

import useFetching from '@@hooks/useFetching';

import {

 CreateSignatureMutation,

 SubscriberBankInformationMutation,

 SubscriberBeneficiaryInformationMutation,

 SubscriberInformationMutation,

 SubscriberOfferMutation,
} from '@@formsMutations';

import {
  
   CreateSignatureFormData,
  
   SubscriberBankInformationFormData,
  
   SubscriberBeneficiaryInformationFormData,
  
   SubscriberInformationFormData,
  
   SubscriberOfferFormData,
  } from '@@formsData';

const handler = {

  CreateSignature: {
    mutation: CreateSignatureMutation,
    formData: CreateSignatureFormData
  },

  SubscriberBankInformation: {
    mutation: SubscriberBankInformationMutation,
    formData: SubscriberBankInformationFormData
  },

  SubscriberBeneficiaryInformation: {
    mutation: SubscriberBeneficiaryInformationMutation,
    formData: SubscriberBeneficiaryInformationFormData
  },

  SubscriberInformation: {
    mutation: SubscriberInformationMutation,
    formData: SubscriberInformationFormData
  },

  SubscriberOffer: {
    mutation: SubscriberOfferMutation,
    formData: SubscriberOfferFormData
  },

}
const useForms = (formName) => {
  const fetching = useFetching();
 
  const onFormsSubmit = (input) => {
    fetching.start();
    handler[formName].mutation(
      input, 
      (ok, error) => {
        if (!ok) return fetching.stop(R.isNil(error) ? 'undefined_error' : error);
        fetching.stop();
      }
    );
  };

  return {
    fetching,
    onFormsSubmit,
    formsData: handler[formName].formData
  };
 };
 
 export default useForms;
 