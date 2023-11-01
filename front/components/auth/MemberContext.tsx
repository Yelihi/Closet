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

export type LoginContextType = {
  value: MemberInfoProps;
  setValue: (v: PartialMemberInfoProps) => void;
  error: IsValiedInfoProps;
  setError: (e: PartialIsValiedInfoProps) => void;
};

export type SignUpContextType = {
  value: SignUpInfoProps;
  setValue: (v: PartialSignUpInfoProps) => void;
  error: IsValiedSignUpInfoProps;
  setError: (e: PartialIsValiedSignUpInfoProps) => void;
};

export function createAuthContext<T>() {
  return React.createContext<T | null>(null);
}

export const LoginContext = createAuthContext<LoginContextType>();
export const SignUpContext = createAuthContext<SignUpContextType>();
