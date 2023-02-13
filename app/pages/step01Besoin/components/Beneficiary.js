import React from 'react';
import classNames from 'classnames';
import BeneficiaryThumb from '../../../components/BeneficiaryThumb';
import useBeneficiary from '../../../hooks/useBeneficiary';

const Beneficiary = ({ value, isMe, thumbColorIndex, isSelected, isSelectable, onAddBeneficiary, onRemoveBeneficiary }) => {
  const { formattedName, initial } = useBeneficiary(value);

  const handleClick = () => isSelected ? onRemoveBeneficiary(value) : onAddBeneficiary(value);

  return (
    <div className={classNames('f-beneficiary-wrapper', { 'f-beneficiary-selected': isSelected })} onClick={isSelectable ? handleClick : null}>
      <BeneficiaryThumb thumbColorIndex={thumbColorIndex} initial={initial} />
      <div className="f-beneficiary-name">{formattedName}</div>
      <div className="f-beneficiary-check">
        <input type="checkbox" checked={isSelected} />
      </div>
    </div>
  );
};

export default Beneficiary;
