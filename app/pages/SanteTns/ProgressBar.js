import React from 'react';
import classNames from 'classnames';

const R = require('ramda');

const ProgressBar = ({
  currentStepIndex
}) => {
  const labels = [
    'Besoin',
    'Offres',
    'Dossier',
    'Signature'
  ];

  const moveByCurrentStep = R.cond([
    [R.equals(1), R.always('-left-step2')],
    [R.equals(2), R.always('-left-step3')],
    [R.equals(3), R.always('-left-step4')]
  ]);

  return (
    <div className="f-progress-bar-container">
      <ul className="f-progress-bar">
        {labels.map((label, index) => (
          <li key={index} className={classNames('f-progress-bar-item-wrapper', moveByCurrentStep(currentStepIndex))}>
            <div className={classNames(`f-progress-bar-item f-item-side-${index}`, { 'f-progress-bar-item-selected': index <= currentStepIndex })} key={index}>
              <div className={classNames('f-progress-bar-item-index-container mr-2', { 'f-progress-bar-item-index-container-selected': index <= currentStepIndex })}>
                {index + 1}
              </div>
              {label}
            </div>
            {index < 3 && (
              <div className={classNames('f-progress-bar-item-arrow-wrapper', { 'f-progress-bar-item-selected': index <= currentStepIndex })}>
                <div className="f-progress-bar-item-arrow-top" />
                <div className={classNames('f-progress-bar-item-arrow-top-2', { 'f-progress-bar-item-selected': index + 1 <= currentStepIndex })} />
                <div className="f-progress-bar-item-arrow-bottom" />
                <div className={classNames('f-progress-bar-item-arrow-bottom-2', { 'f-progress-bar-item-selected': index + 1 <= currentStepIndex })} />
              </div>
            )}
          </li>
        ))
        }
      </ul >
    </div>
  );
};

export default ProgressBar;
