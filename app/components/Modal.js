import React from 'react';
const R = require('ramda');

const Modal = ({ modalContent, isModalOpen, onSubmit, closeModal, multipleContent = false }) => {
  const SimpleModal = () => {
    const img = R.prop('img', modalContent);
    const title = R.prop('title', modalContent);
    const texts = R.prop('texts', modalContent);
    const asterisque = R.prop('asterisque', modalContent);
    const btn = R.prop('btn', modalContent);
    return (
      <div className='f-modal-container'>
        {img && <img className="f-modal-img" src={img} />}
        {title && <p className='f-modal-title mx-4 mt-5 mb-0'>{title}</p>}
        {texts && R.map((text, index) => (
          <p className='mx-4 mb-0' key={index}>{text}</p>
        ))(texts)}
        {asterisque && <p className='mx-4 mb-0 text-xs'>{asterisque}</p>}
        {btn && <button className="f-button-purple f-modal-btn mt-8" type="submit" onClick={onSubmit}>{btn}</button>}
        <img src={'/icons/icon-close-modal.svg'} className='f-close-modal-btn' onClick={closeModal} />
      </div>
    );
  };

  const LargeModal = () => {
    return (
      <div className='f-modal-container-multiple-content'>
        <div className='f-modal-multiple-content'>
          {R.map((content, index) => (
            <div key={index}>
              <img className="f-modal-multiple-content-img" src={R.prop('img', content)} />
              <p className='f-modal-title mx-4 mt-5 mb-0'>{R.prop('title', content)}</p>
              {R.map((text, index) => (
                <p className='mx-4 mb-0' key={index}>{text}</p>
              ))(R.propOr([], 'texts', content))}
              <p className='mx-4 mb-0 text-xs'>{content.asterisque}</p>
            </div>
          ))(modalContent)}
        </div>
        <button className="f-button-purple f-modal-btn mt-8" type="submit" onClick={onSubmit}>{'Réaliser une estimation'}</button>
        <img src={'/icons/icon-close-modal.svg'} className='f-close-modal-btn' onClick={closeModal} />
      </div>
    );
  };
  return (
    <div className={`${isModalOpen ? 'f-modal-overlay f-show-modal' : 'f-modal-overlay'}`}>
      {!multipleContent ? <SimpleModal/> : <LargeModal/>}
    </div>
  );
};

export default Modal;
