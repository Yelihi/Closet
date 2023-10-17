import { useEffect } from 'react';

const useDelayCall = (func: any, dependency: any) => {
  let isInvokeFunc = false;

  useEffect(() => {
    isInvokeFunc = true;

    if (isInvokeFunc) {
      func();
      isInvokeFunc = false;
    }
  }, [dependency]);
};

export default useDelayCall;
