import React, { useState, useCallback, useReducer, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { signinRequestAction } from '../../reducers/user';

import AButton from '../recycle/element/button/AButton';
import useInput from '../../hooks/useInput';
import { useSelector } from 'react-redux';

import type { RootState } from '../../reducers/types';

export interface SIprops {
  toggleGotoAccount: () => void;
}

const Signup = (props: SIprops) => {
  const dispatch = useDispatch();
  const divref = useRef<HTMLButtonElement>(null);
  const { signInDone } = useSelector((state: RootState) => state.user);
  const { toggleGotoAccount } = props;
  const [isCollect, setIsCollect] = useState<boolean>(false);
  const [name, setName, onChangeName] = useInput('');
  const [email, setEmail, onChangeEmail] = useInput('');
  const [password, setPassword] = useState<string>('');
  const [passwordCheck, setPasswordCheck] = useState<string>('');

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onChangePasswordCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordCheck(e.target.value);
      setIsCollect(e.target.value === password);
    },
    [password]
  );

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (password !== passwordCheck) {
        setIsCollect(false);
      }
      dispatch(signinRequestAction({ email: email, nickname: name, password: password, src: '' }));
    },
    [email, password, passwordCheck, name]
  );

  useEffect(() => {
    if (signInDone) {
      toggleGotoAccount();
    }
  }, [signInDone]);

  const emailRegExp = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,3}$/;
  const passwordRegExp = /^.{8,}$/;

  const isEmailValid = emailRegExp.test(email);
  const isPasswordValid = passwordRegExp.test(password);

  return (
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
          <input type='text' value={name} onChange={onChangeName} placeholder='Name' required data-testid='signUpName' />
          <div></div>
          <input type='email' value={email} onChange={onChangeEmail} placeholder='Email' data-testid='signUpEmail' />
          <div>{email && !isEmailValid && `이메일이 올바르지 않습니다`}</div>
          <input type='password' value={password} onChange={onChangePassword} placeholder='Password' data-testid='signUpPassword' />
          <div>{password && !isPasswordValid && `비밀번호가 올바르지 않습니다`}</div>
          <input type='password' value={passwordCheck} onChange={onChangePasswordCheck} placeholder='Password Check' data-testid='signUpCheck' />
          <div>{passwordCheck && !isCollect && `비밀번호가 일치하지 않습니다`}</div>
          <AButton type='submit' innerRef={divref} color='black' disabled={!(isEmailValid && isPasswordValid && isCollect)} dest='Create account' data-testid='submitButton' />
          <AButton type='button' innerRef={divref} color='' disabled={false} onClick={toggleGotoAccount} dest='back' data-testid='back' />
          <div></div>
          <div></div>
        </SignupForm>
      </SignupSection>
    </SignupBox>
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

  > input {
    width: 300px;
    height: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    margin-bottom: 10px;

    :focus {
      border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    }
  }

  > div {
    width: 100%;
    height: 20px;
    margin-bottom: 5px;
    font-family: ${({ theme }) => theme.font.Kfont};
    font-weight: ${({ theme }) => theme.fontWeight.Light};
    font-size: 12px;
    color: red;
  }
`;
