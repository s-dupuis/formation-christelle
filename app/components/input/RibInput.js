import React, { useState, useEffect } from 'react';
import { BlockField, Badge } from '@@components';
import InputSplit from './InputSplit';

const R = require('ramda');
const IBAN = require('iban');

const RibInput = ({ onChange, value, hasError }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [ribValue, setRibValue] = useState(value || '');
  const [ibanIsValid, setIbanIsValid] = useState(true);

  const [isShaking, setShaking] = useState(false);

  useEffect(() => {
    setShaking(hasError);
  }, [hasError]);

  const onToggleEditMode = () => {
    if (isEditing) {
      // * Handle validation
      if (!IBAN.isValid(ribValue.iban)) {
        setIbanIsValid(false);
        return;
      }
      setIbanIsValid(true);
      onChange(ribValue);
    }

    setIsEditing(!isEditing);
  };

  const buttonClasses = [
    isEditing ? ' f-circle-btn-blue' : 'f-circle-btn',
    isShaking ? 'shake' : ''
  ].filter((v) => R.not(R.isEmpty(v)));

  return <div className="flex">
    <div className={`flex-auto border p-2 border-${hasError && !isEditing ? 'red' : 'gray'}-300 rounded`}>
      {!isEditing && <BlockField label="RIB">

        <div className="flex justify-start">
          <div>Libellé RIB</div>
          {(R.not(R.isEmpty(R.propOr('', 'label', value))) &&
          <Badge>{R.propOr('', 'label', value)}</Badge>) ||
          <Badge>Non défini</Badge>
          }
        </div>
        <div>
          <div>{R.splitEvery(4, R.propOr('', 'iban', value).split(' ').join('')).join(' ')}</div>
          <div>{R.propOr('', 'bic', value)}</div>
        </div>
      </BlockField>
      }
      {isEditing &&
    <>
      <BlockField label="Libellé RIB">
        <input
          name="label"
          className="f-input-gray"
          value={R.propOr('', 'label', ribValue)}
          onChange={(e) => setRibValue(R.assoc('label', R.path(['target', 'value'], e)))}
        />
      </BlockField>

      {/* IBAN */}
      <BlockField label="IBAN">
        <InputSplit
          sizes={[4, 4, 4, 4, 4, 4, 3]}
          tranform={'uppercase'}
          isValid={ibanIsValid && !hasError}
          value={R.propOr('', 'iban', ribValue)}
          onChange={(v) => setRibValue(R.assoc('iban', v))}
        />
      </BlockField>

      {/* BIC */}
      <BlockField label="BIC">
        <input
          name="bic"
          className="f-input-gray"
          value={R.propOr('', 'bic', ribValue)}
          onChange={(e) => setRibValue(R.assoc('bic', R.path(['target', 'value'], e)))}
        />
      </BlockField>
    </>
      }
    </div>
    <div className="flex-none mx-2 p-2">
      <button type="button" className={buttonClasses.join(' ')} onClick={onToggleEditMode}>
        <img src={'/icons/bt-edit.svg'}/>
      </button>
    </div>
  </div>;
};

export default RibInput;
