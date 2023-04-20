import React, { useState, useCallback } from 'react';

type toggleProps = [boolean, () => void];

export default function useToggle(state: boolean): toggleProps {
  const [toggle, setToggle] = useState(false);

  const onToggle = useCallback(() => {
    setToggle(prev => !prev);
  }, []);

  return [toggle, onToggle];
}
