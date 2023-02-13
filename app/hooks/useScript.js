import { useEffect } from 'react';
import * as R from 'ramda';

const useScript = (url, onLoad) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    if (!R.isNil(onLoad) && R.is(Function, onLoad)) {
      script.onload = () => {
        onLoad(window);
      };
    }

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

export default useScript;
