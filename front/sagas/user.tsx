import { AnyAction } from 'redux';
import axios, { AxiosResponse } from 'axios';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import * as t from '../reducers/type';

// reducer
import { UserInfo, PatchUserInfo } from '../reducers/types/user';

// saga
import { LoginSuccess, IResult } from './types/user';

interface Success {
  data: Object;
  status: number;
  statusText: string;
  headers: any;
  config: Object;
  request: any;
}

function logInAPI(data: UserInfo) {
  return axios.post('/user/login', data);
}

function* logIn(action: AnyAction) {
  try {
    const result: AxiosResponse<LoginSuccess> = yield call(logInAPI, action.data);
    yield put({
      type: t.LOGIN_SUCCESE,
      data: result.data,
    });
  } catch (err: any) {
    console.error(err);
    yield put({
      type: t.LOGIN_FAILURE,
      error: axios.isAxiosError(err) ? err.response?.data : err.response.data,
    });
  }
}

function logOutAPI() {
  return axios.post('/user/logout');
}

function* logOut(action: AnyAction) {
  try {
    const result: AxiosResponse<LoginSuccess> = yield call(logOutAPI);
    yield put({
      type: t.LOGOUT_SUCCESE,
      data: result.data,
    });
  } catch (err: any) {
    console.error(err);
    yield put({
      type: t.LOGOUT_FAILURE,
      error: axios.isAxiosError(err) ? err.response?.data : err.response.data,
    });
  }
}

function signInAPI(data: UserInfo) {
  return axios.post('/user/create', data);
}

function* signIn(action: AnyAction) {
  try {
    const result: AxiosResponse<LoginSuccess> = yield call(signInAPI, action.data);
    yield put({
      type: t.SIGNIN_SUCCESE,
      data: result.data,
    });
  } catch (err: any) {
    console.error(err);
    yield put({
      type: t.SIGNIN_FAILURE,
      error: axios.isAxiosError(err) ? err.response?.data : err.response.data,
    });
  }
}

function loadToMyInfoAPI() {
  return axios.get('/user');
}

function* loadToMyInfo(action: AnyAction) {
  try {
    const result: AxiosResponse<LoginSuccess> = yield call(loadToMyInfoAPI);
    yield put({
      type: t.LOAD_TO_MY_INFO_SUCCESE,
      data: result.data,
    });
  } catch (err: any) {
    console.error(err);
    yield put({
      type: t.LOAD_TO_MY_INFO_FAILURE,
      error: axios.isAxiosError(err) ? err.response?.data : err.response.data,
    });
  }
}

async function uploadPreviewImageAPI(data: Iterable<[PropertyKey, Object]>) {
  return axios.post('/post/images', data, { headers: { 'Content-Type': `multipart/form-data; charset=UTF-8` } });
}

function* uploadPreviewImage(action: AnyAction) {
  try {
    console.log('saga uploadPreviewImage');
    const result: AxiosResponse<Success> = yield call(uploadPreviewImageAPI, action.data);
    yield put({
      type: t.UPLOAD_PREVIEW_IMAGE_SUCCESS,
      data: result.data,
    });
  } catch (err: any) {
    console.error(err);
    yield put({
      type: t.UPLOAD_PREVIEW_IMAGE_FAILURE,
      error: err.response.data,
    });
  }
}

async function updateUserInfoAPI(data: PatchUserInfo) {
  return axios.patch('/user', data);
}

function* updateUserInfo(action: AnyAction) {
  try {
    console.log('saga updateUserInfo');
    const result: AxiosResponse<Success> = yield call(updateUserInfoAPI, action.data);
    yield put({
      type: t.PATCH_USER_INFO_SUCCESS,
      data: result.data,
    });
  } catch (err: any) {
    console.error(err);
    yield put({
      type: t.PATCH_USER_INFO_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest(t.LOGIN_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(t.LOGOUT_REQUEST, logOut);
}

function* watchSignIn() {
  yield takeLatest(t.SIGNIN_REQUEST, signIn);
}

function* watchLoadToMyInfo() {
  yield takeLatest(t.LOAD_TO_MY_INFO_REQUEST, loadToMyInfo);
}

function* watchUploadPreviewImage() {
  yield takeLatest(t.UPLOAD_PREVIEW_IMAGE_REQUEST, uploadPreviewImage);
}

function* watchUpdateUserInfo() {
  yield takeLatest(t.PATCH_USER_INFO_REQUEST, updateUserInfo);
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchSignIn),
    fork(watchLogOut),
    fork(watchLoadToMyInfo),
    fork(watchUploadPreviewImage),
    fork(watchUpdateUserInfo),
  ]);
}
