import React, { useRef, useReducer } from 'react';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import 'antd/dist/reset.css';
import { Divider } from 'antd';

import TextField from '../recycle/auth/TextField';
import google from '../../public/images/google.webp';
import AButton from '../recycle/element/button/AButton';

import { isEmail, maxLength } from '../../util/auth/validation';

import { loginRequestAction } from '../../reducers/user';

import type { SIprops } from './Signup';
import { backUrl } from '../../config/config';
import type { MemberInfoProps, IsValiedInfoProps, PartialMemberInfoProps, PartialIsValiedInfoProps } from './Type';
import buttonLoading from '../../public/AnimaionJson/buttonLoading.gif';

import { LoginContext } from './MemberContext';
import { rootReducerType } from '../../reducers/types';

export const memberInfo = {
  email: '',
  password: '',
};

const isValiedInfo = Object.keys(memberInfo).reduce((obj, key) => {
  obj[key as keyof IsValiedInfoProps] = undefined;
  return obj;
}, {} as IsValiedInfoProps);

const Login = (props: SIprops) => {
  const dispatch = useDispatch();
  const { logInLoading } = useSelector((state: rootReducerType) => state.user);
  const { toggleGotoAccount } = props;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const LinkRef = useRef<HTMLAnchorElement>(null);
  const [Info, setInfo] = useReducer((prevInfo: MemberInfoProps, partialInfo: PartialMemberInfoProps) => {
    return { ...prevInfo, ...partialInfo };
  }, memberInfo);
  const [error, setError] = useReducer((prevError: IsValiedInfoProps, partialError: PartialIsValiedInfoProps) => {
    return { ...prevError, ...partialError };
  }, isValiedInfo);

  const disabled = Object.values(error).some(e => e !== undefined);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginRequestAction({ email: Info.email, password: Info.password }));
  };

  return (
    <LoginContext.Provider
      value={{
        value: Info,
        setValue: setInfo,
        error: error,
        setError: setError,
      }}
    >
      <LoginBox>
        <LeftTopBrand>
          <span>Closet</span>
        </LeftTopBrand>
        <LoginSection>
          <LoginForm data-testid='login Form' onSubmit={onSubmit}>
            <h1>Welcome to Closet!</h1>
            <span>의류를 계획적으로 관리해 보세요.</span>
            <TextField
              type='email'
              source='email'
              placeholder='Email'
              validate={[isEmail()]}
              testId='loginEmailInput'
              context='Login'
            />
            <TextField
              type='password'
              source='password'
              placeholder='Password'
              validate={[maxLength(8)]}
              testId='loginPasswordInput'
              context='Login'
            />
            <AButton
              type='submit'
              color='black'
              innerRef={buttonRef}
              disabled={disabled}
              dest='Sign in'
              data-testid='SignIn'
              src={logInLoading ? buttonLoading : undefined}
            />
            <AButton
              type='button'
              innerRef={buttonRef}
              color=''
              onClick={toggleGotoAccount}
              disabled={false}
              dest='Create account'
              data-testid='loginToSignUp'
            />
            <LDivider plain>OR</LDivider>
            <AButton
              As='a'
              innerRef={LinkRef}
              color=''
              disabled={false}
              dest='Sign in Google'
              src={google}
              href={`${backUrl}/auth/google`}
              data-testid='loginWithGoogle'
            />
          </LoginForm>
        </LoginSection>
      </LoginBox>
    </LoginContext.Provider>
  );
};

export default Login;

const LoginBox = styled.div`
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

const LoginSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.form`
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

const LDivider = styled(Divider)`
  .ant-divider-inner-text {
    font-family: ${({ theme }) => theme.font.Efont};
    font-size: 12px;
    font-weight: ${({ theme }) => theme.fontWeight.Light};
  }
`;
