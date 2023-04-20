import { applyMiddleware, createStore, compose, Middleware, StoreEnhancer, AnyAction, Store } from 'redux';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware, { Task } from '@redux-saga/core';

import reducer from '../reducers/';
import { RootState } from '../reducers/types';
import rootSaga from '../sagas';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const configureStore: MakeStore<Store<RootState, AnyAction>> = context => {
  // console.log(context);
  const sagaMiddleware = createSagaMiddleware();
  const middlewares: Middleware[] = [sagaMiddleware];
  const enhancer: StoreEnhancer = process.env.NODE_ENV === 'production' ? compose(applyMiddleware(...middlewares)) : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhancer);
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
