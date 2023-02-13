import React from 'react';
import * as R from 'ramda';
import useScript from '../hooks/useScript';

const universignUrl = process.env.UNIVERSIGN_IFRAME_URL;
const iframeContainerId = 'iframeContainerId';

const useUniversign = ({ signerId, onSigned }) => {
  const generateIframe = (universignSigInit) => {
    const configuration = {
      redirectionMode: 'IN'
    };

    universignSigInit(iframeContainerId, signerId, configuration, process.env.NODE_ENV === 'development' ? universignUrl : undefined);
  };

  useScript(`${universignUrl}/sig/embed.js`, (window) => {
    generateIframe(window.universignSigInit);
  });

  const eventListener = event => {
    const status = R.path(['detail', 'status'], event);
    if (status === 'signed') {
      window.removeEventListener('pdsEvent', eventListener);

      if (R.both(R.complement(R.isNil), R.is(Function))(onSigned)) {
        // FIXME why is the event fired 3 times ? crash if no waiting
        setTimeout(() => {
          onSigned();
        }, 500);
      }
    }
  };

  window.addEventListener('pdsEvent', eventListener);
};

const UniversignIframe = ({ signerId, onSigned }) => {
  if (R.isNil(signerId)) {
    return null;
  }

  useUniversign({ signerId, onSigned });

  return <div
    className="flex justify-between items-stretch"
    style={{ height: '60vh' }}
  >
    <div
      id={iframeContainerId}
      className="w-full px-4 inline-block h-"
    />
  </div>;
};

export default UniversignIframe;
