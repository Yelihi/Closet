import React from 'react';
import styled from 'styled-components';

import { MemberInfoProps, SignUpInfoProps, Merge } from '../../auth/type/Type';
import { HTMLInputTypeAttribute } from 'react';
import useContextSwitch from '../../../hooks/useContextSwitch';

type StringKeys = keyof Merge<MemberInfoProps, SignUpInfoProps>;

type TextFieldProps = {
  type: HTMLInputTypeAttribute;
  source: StringKeys;
  placeholder: string;
  connectType?: StringKeys;
  testId?: string;
  validate: any;
  context: 'Login' | 'SignUp';
};

const TextField = ({ type, source, placeholder, connectType, testId, validate, context }: TextFieldProps) => {
  const inputValue = useContextSwitch({ source, validate, connectType, context });
  if (inputValue === null || inputValue === undefined) return null;
  const { value, error, onChange } = inputValue;

  return (
    <>
      <Input
        type={type}
        name={source}
        value={value.toString()}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        data-testid={testId}
      />
      <Error>{value && error && `${error}`}</Error>
    </>
  );
};

export default TextField;

const Input = styled.input`
  width: 300px;
  height: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  margin-bottom: 10px;

  :focus {
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  }
`;

const Error = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 5px;
  font-family: ${({ theme }) => theme.font.Kfont};
  font-weight: ${({ theme }) => theme.fontWeight.Light};
  font-size: 12px;
  color: red;
`;
