import { AnyAction } from 'redux';
import axios, { AxiosResponse } from 'axios';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import * as t from '../reducers/type';

// reducer
import { UserInfo } from '../reducers/types/user';

// saga
import { LoginSuccess, IResult } from './types/user';

function logInAPI(data: UserInfo) {
  return axios.post('/user/login', data);
}

function* logIn(action: AnyAction) {
  try {
    console.log('saga logIn');
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
    console.log('saga logOut');
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
    console.log('saga signIn');
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
    console.log('saga loadToMyInfo');
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

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchSignIn), fork(watchLogOut), fork(watchLoadToMyInfo)]);
}
