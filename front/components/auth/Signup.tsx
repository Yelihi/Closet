import React, { useCallback, useReducer, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { signinRequestAction } from '../../reducers/user';

import AButton from '../recycle/element/button/AButton';
import TextField from '../recycle/auth/TextField';

import type { RootState } from '../../reducers/types';
import {
  SignUpInfoProps,
  IsValiedSignUpInfoProps,
  PartialSignUpInfoProps,
  PartialIsValiedSignUpInfoProps,
} from './Type';
import { SignUpContext } from './MemberContext';
import buttonLoading from '../../public/AnimaionJson/buttonLoading.gif';
import { isEmail, isEqual, maxLength } from '../../util/Auth/validation';

export interface SIprops {
  toggleGotoAccount: () => void;
}

export const signUpInfo: SignUpInfoProps = {
  nickName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const isValiedSignUpInfo = Object.keys(signUpInfo).reduce((obj, key) => {
  obj[key as keyof IsValiedSignUpInfoProps] = undefined;
  return obj;
}, {} as IsValiedSignUpInfoProps);

const Signup = (props: SIprops) => {
  const dispatch = useDispatch();
  const divref = useRef<HTMLButtonElement>(null);
  const { signInDone, signInLoading } = useSelector((state: RootState) => state.user);
  const { toggleGotoAccount } = props;

  const [info, setInfo] = useReducer((prevState: SignUpInfoProps, partialState: PartialSignUpInfoProps) => {
    return { ...prevState, ...partialState };
  }, signUpInfo);
  const [error, setError] = useReducer(
    (prevState: IsValiedSignUpInfoProps, partialState: PartialIsValiedSignUpInfoProps) => {
      return { ...prevState, ...partialState };
    },
    isValiedSignUpInfo
  );

  useEffect(() => {
    if (signInDone) {
      toggleGotoAccount();
    }
  }, [signInDone]);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(
        signinRequestAction({
          email: info.email,
          nickname: info.nickName,
          password: info.password,
          src: '',
        })
      );
    },
    [info.email, info.password, info.confirmPassword, info.nickName]
  );

  const isDisabled = Object.values(error).some(e => e !== undefined);

  return (
    <SignUpContext.Provider
      value={{
        value: info,
        setValue: setInfo,
        error: error,
        setError: setError,
      }}
    >
      <SignupBox>
        <LeftTopBrand>
          <span>Closet</span>
        </LeftTopBrand>
        <SignupSection>
          <SignupForm data-testid='Signup Form' onSubmit={onSubmit}>
            <h1>Create an account</h1>
            <span>
              이메일 양식에 적합하게 작성해주시고,
              <br />
              비밀번호는 8자리 이상 해주세요
            </span>
            <TextField
              type='text'
              source='nickName'
              placeholder='Name'
              testId='signUpName'
              validate={[maxLength(2)]}
              context='SignUp'
            />
            <TextField
              type='email'
              source='email'
              placeholder='Email'
              testId='signUpEmail'
              validate={[isEmail()]}
              context='SignUp'
            />
            <TextField
              type='password'
              source='password'
              placeholder='Password'
              testId='signUpPassword'
              validate={[maxLength(8)]}
              context='SignUp'
            />
            <TextField
              type='password'
              source='confirmPassword'
              placeholder='Password Check'
              testId='signUpCheck'
              validate={[isEqual()]}
              connectType='password'
              context='SignUp'
            />
            <AButton
              type='submit'
              innerRef={divref}
              color='black'
              disabled={isDisabled}
              dest='Create account'
              data-testid='submitButton'
              src={signInLoading ? buttonLoading : undefined}
            />
            <AButton
              type='button'
              innerRef={divref}
              color=''
              disabled={false}
              onClick={toggleGotoAccount}
              dest='back'
              data-testid='back'
            />
            <div></div>
            <div></div>
          </SignupForm>
        </SignupSection>
      </SignupBox>
    </SignUpContext.Provider>
  );
};

export default Signup;

const SignupBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  height: auto;
  padding: 20px;
`;

const LeftTopBrand = styled.div`
  width: 100%;
  margin-bottom: 70px;

  > span {
    text-align: start;
    font-family: ${({ theme }) => theme.font.Logo};
    font-size: 13px;
  }
`;

const SignupSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: fit-content;

  > h1 {
    display: inline-block;
    font-family: ${({ theme }) => theme.font.Efont};
    font-size: 25px;
    font-weight: ${({ theme }) => theme.fontWeight.Medium};
    margin-bottom: 10px;
  }

  > span {
    display: block;
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fontWeight.Light};
    margin-bottom: 40px;
  }
`;
