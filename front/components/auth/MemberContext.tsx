import React from 'react';

import type {
  MemberInfoProps,
  IsValiedInfoProps,
  PartialMemberInfoProps,
  PartialIsValiedInfoProps,
  SignUpInfoProps,
  IsValiedSignUpInfoProps,
  PartialSignUpInfoProps,
  PartialIsValiedSignUpInfoProps,
} from './type/Type';

// context 를 login 과 signup 을 통합하여 하기에는 타입에서 문제가 발생하여 context 를 분리하기로 결정
// LoginContext의 type
export type LoginContextType = {
  value: MemberInfoProps;
  setValue: (v: PartialMemberInfoProps) => void;
  error: IsValiedInfoProps;
  setError: (e: PartialIsValiedInfoProps) => void;
};

// SignupContext 의 type
export type SignUpContextType = {
  value: SignUpInfoProps;
  setValue: (v: PartialSignUpInfoProps) => void;
  error: IsValiedSignUpInfoProps;
  setError: (e: PartialIsValiedSignUpInfoProps) => void;
};

export function createAuthContext<T>() {
  return React.createContext<T | null>(null);
}

// 각각의 타입에 해당하는 Context 생성
export const LoginContext = createAuthContext<LoginContextType>();
export const SignUpContext = createAuthContext<SignUpContextType>();
