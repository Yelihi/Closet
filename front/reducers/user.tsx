import { AnyAction } from 'redux';
import produce from 'immer';
import * as t from './type';

import Router from 'next/router';

import { UserInitialState, UserInfo, UserSignUp } from './types/user';

const dumyUser = () => ({
  id: 1,
  NickName: '원익',
  Cloths: [
    {
      id: 1,
      productName: '자바나스 화이트코트',
      description: '실험중',
      price: 230000,
      color: '#ffffff',
      categori: 'outer',
      purchaseDay: '2019-02-10',
      Outers: [
        {
          id: 1,
          shoulder: 20,
          arm: 10,
          totalLength: 110,
          chest: 60,
        },
      ],
    },
  ],
});

export const initialState: UserInitialState = {
  loadToMyInfoDone: false,
  loadToMyInfoError: null,
  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
  signInLoading: false,
  signInDone: false,
  signInError: null,
  me: null,
};

export const loginRequestAction = (data: UserInfo) => {
  return {
    type: t.LOGIN_REQUEST,
    data,
  };
};

export const signinRequestAction = (data: UserSignUp) => {
  return {
    type: t.SIGNIN_REQUEST,
    data,
  };
};

export const logoutRequestAction = () => {
  return {
    type: t.LOGOUT_REQUEST,
  };
};

export default (state = initialState, action: AnyAction) => {
  return produce(state, draft => {
    switch (action.type) {
      case t.LOAD_TO_MY_INFO_REQUEST: {
        draft.loadToMyInfoDone = false;
        draft.loadToMyInfoError = null;
        break;
      }
      case t.LOAD_TO_MY_INFO_SUCCESE: {
        draft.loadToMyInfoDone = true;
        draft.loadToMyInfoError = null;
        draft.me = action.data;
        break;
      }
      case t.LOAD_TO_MY_INFO_FAILURE: {
        draft.loadToMyInfoDone = false;
        draft.loadToMyInfoError = action.error;
        break;
      }
      case t.LOGIN_REQUEST: {
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;
      }
      case t.LOGIN_SUCCESE: {
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.logInError = null;
        draft.me = action.data;
        alert(`반갑습니다! ${action.data.nickname}님!`);
        Router.push('/closet/overview');
        break;
      }
      case t.LOGIN_FAILURE: {
        draft.logInLoading = false;
        draft.logInDone = false;
        draft.logInError = action.error;
        alert(action.error);
        break;
      }
      case t.LOGOUT_REQUEST: {
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;
      }
      case t.LOGOUT_SUCCESE: {
        document.cookie = 'connect.sid=; max-age=-1; path=/';
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.logOutError = null;
        draft.me = action.data;
        Router.push('/userlogin');
        alert(`로그아웃 되셨습니다.`);
        break;
      }
      case t.LOGOUT_FAILURE: {
        draft.logInLoading = false;
        draft.logInDone = false;
        draft.logInError = action.error;
        alert(action.error);
        break;
      }
      case t.SIGNIN_REQUEST: {
        draft.signInLoading = true;
        draft.signInDone = false;
        draft.signInError = null;
        break;
      }
      case t.SIGNIN_SUCCESE: {
        draft.signInLoading = false;
        draft.signInDone = true;
        draft.signInError = null;
        draft.me = action.data;
        alert(action.data);
        break;
      }
      case t.SIGNIN_FAILURE: {
        draft.signInLoading = false;
        draft.signInDone = false;
        draft.signInError = action.error;
        alert(action.error);
        break;
      }
    }
  });
};
