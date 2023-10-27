import { AnyAction } from 'redux';
import produce from 'immer';
import * as t from './type';

import Router from 'next/router';

import { UserInitialState, UserInfo, UserSignUp } from './types/user';

export const initialState: UserInitialState = {
  updateUserInfoLoading: false,
  updateUserInfoDone: false,
  updateUserInfoError: null,
  deletePreviewImageDone: false,
  uploadPreviewImageLoading: false,
  uploadPreviewImageDone: false,
  uploadPreviewImageError: null,
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
  userProfileImages: '',
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
      case t.DELETE_PREVIEW_IMAGE: {
        draft.deletePreviewImageDone = true;
        draft.userProfileImages = '';
        break;
      }
      case t.PATCH_USER_INFO_REQUEST: {
        draft.updateUserInfoLoading = true;
        draft.updateUserInfoError = null;
        break;
      }
      case t.PATCH_USER_INFO_SUCCESS: {
        draft.updateUserInfoLoading = false;
        draft.updateUserInfoDone = true;
        draft.updateUserInfoError = null;
        draft.me = action.data;
        alert('성공적으로 수정하셨습니다!');
        break;
      }
      case t.PATCH_USER_INFO_FAILURE: {
        draft.updateUserInfoLoading = false;
        draft.updateUserInfoDone = false;
        draft.updateUserInfoError = action.error;
        alert('수정에 실패했습니다..');
        break;
      }
      case t.UPLOAD_PREVIEW_IMAGE_REQUEST: {
        draft.uploadPreviewImageLoading = true;
        draft.uploadPreviewImageError = null;
        break;
      }
      case t.UPLOAD_PREVIEW_IMAGE_SUCCESS: {
        draft.uploadPreviewImageLoading = false;
        draft.uploadPreviewImageDone = true;
        draft.uploadPreviewImageError = null;
        draft.userProfileImages = action.data.src;
        break;
      }
      case t.UPLOAD_PREVIEW_IMAGE_FAILURE: {
        draft.uploadPreviewImageLoading = false;
        draft.uploadPreviewImageDone = false;
        draft.uploadPreviewImageError = action.error;
        break;
      }
      case t.LOAD_TO_MY_INFO_REQUEST: {
        draft.loadToMyInfoDone = false;
        draft.loadToMyInfoError = null;
        break;
      }
      case t.LOAD_TO_MY_INFO_SUCCESE: {
        draft.loadToMyInfoDone = true;
        draft.loadToMyInfoError = null;
        draft.me = action.data;
        draft.userProfileImages = draft.me !== null ? draft.me.src : '';
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
