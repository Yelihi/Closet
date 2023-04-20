import React, { useState, useCallback } from 'react';

type UserInputProps = [string, React.Dispatch<React.SetStateAction<string>>, (event: React.ChangeEvent<HTMLInputElement>) => void];

const useInput = (initialState: string): UserInputProps => {
  const [value, setValue] = useState(initialState);
  const onChangeValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  return [value, setValue, onChangeValue];
};

export default useInput;
