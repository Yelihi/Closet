import { useEffect, useState } from 'react';

function useDebounce(value: string | undefined, timer: number, setDelayedFunc?: React.Dispatch<React.SetStateAction<boolean>>) {
  const [delayValue, setDelayValue] = useState<string | undefined>(value);

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (setDelayedFunc) {
        setDelayedFunc(false);
      }
      setDelayValue(value);
    }, timer);

    return () => {
      clearTimeout(debounce);
    };
  }, [value, timer]);

  return delayValue;
}

export default useDebounce;
