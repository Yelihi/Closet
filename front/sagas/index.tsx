import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3065';
axios.defaults.withCredentials = true;

import userSaga from './user';
import postSage from './post';

export default function* rootSaga() {
  yield all([fork(userSaga), fork(postSage)]);
}
