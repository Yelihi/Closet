import React, { useState, useEffect } from 'react';

export default function useDeviceWidth(device: 'phone' | 'desktop') {
  const [windowWidth, setWindowWidth] = useState<'phone' | 'desktop'>(device);

  useEffect(() => {
    function updateWindowWidth() {
      if (window.innerWidth <= 786) {
        setWindowWidth('phone');
      } else {
        setWindowWidth('desktop');
      }
    }
    window.addEventListener('resize', updateWindowWidth);
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  return {
    windowWidth,
  };
}
