import React from 'react';
import { applyMiddleware, createStore, compose, Middleware, StoreEnhancer, Store } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import createSagaMiddleware, { Task } from '@redux-saga/core';

import reducer from '../../reducers';
import rootSaga from '../../sagas';

import RenderWithTheme from './renderWithTheme';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

export const renderWithRedux = (ui: React.ReactNode) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares: Middleware[] = [sagaMiddleware];
  const enhancer: StoreEnhancer = compose(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhancer);
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return render(
    <RenderWithTheme>
      <Provider store={store}>{ui}</Provider>
    </RenderWithTheme>
  );
};
