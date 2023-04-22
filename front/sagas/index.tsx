import { all, fork } from 'redux-saga/effects';
import { backUrl } from '../config/config';
import axios from 'axios';

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

import userSaga from './user';
import postSage from './post';

export default function* rootSaga() {
  yield all([fork(userSaga), fork(postSage)]);
}
