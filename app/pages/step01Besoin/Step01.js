import React from 'react';
import { CurrentContractSubStep } from '@fasstech/contract_hook';

const Step01 = ({
  onNext,
  onPrevious,
  onUpdateData
}) => {
  return (
    <CurrentContractSubStep
      onNext={onNext}
      onPrevious={onPrevious}
      onUpdateData={onUpdateData}
    />
  );
};

export default Step01;
