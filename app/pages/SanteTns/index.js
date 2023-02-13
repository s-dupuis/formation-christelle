import React from 'react';
import ProgressBar from './ProgressBar';
import setup from './setup';
import ContractStore, { useContract, CurrentContractStep } from '@fasstech/contract_hook';

const ContractStoreWrapper = ContractStore();

const SanteTns = () => {
  const {
    step,
    subStep,
    onNext,
    onPrevious,
    onUpdateData
  } = useContract(setup);

  return (
    <div className="flex-1 flex flex-col">
      <ProgressBar currentStepIndex={step.index}/>
      <div className="f-content">
        {subStep.step !== 'step_04_sub_step_02' && <img className="f-back-button" onClick={onPrevious} src="/icons/back.svg" />}
        <CurrentContractStep
          onNext={onNext}
          onPrevious={onPrevious}
          onUpdateData={onUpdateData}
        />
      </div>
    </div >
  );
};

const SanteTnsWrapper = (props) =>
  <ContractStoreWrapper>
    <SanteTns {...props} />
  </ContractStoreWrapper>;

export default SanteTnsWrapper;
