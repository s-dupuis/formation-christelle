import { useState, useEffect } from 'react';

const useDevice = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => setWidth(window.innerWidth);
  const isMobile = width < 768;

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return {
    width,
    isMobile
  };
};

export default useDevice;
