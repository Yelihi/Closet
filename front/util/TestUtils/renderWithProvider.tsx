import React, { PropsWithChildren } from 'react';
import { applyMiddleware, createStore, compose, Middleware, StoreEnhancer, Store } from 'redux';
import { Provider } from 'react-redux';
import { RenderOptions, render } from '@testing-library/react';
import createSagaMiddleware, { Task } from '@redux-saga/core';
import { SWRConfig } from 'swr';

import reducer from '../../reducers';
import rootSaga from '../../sagas';

import RenderWithTheme from './renderWithTheme';

import { rootReducerType } from '../../reducers/types';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  store?: ReturnType<typeof setupStore>;
  preloadedState?: rootReducerType;
}

export function setupStore(preloadedState?: rootReducerType) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares: Middleware[] = [sagaMiddleware];
  const enhancer: StoreEnhancer = compose(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhancer);
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);
  return store;
}

export const renderWithProvider = (ui: React.ReactElement, { preloadedState, store = setupStore(), ...renderOptions }: ExtendedRenderOptions = {}) => {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <SWRConfig value={{ provider: () => new Map(), dedupingInterval: 0 }}>
        <RenderWithTheme>
          <Provider store={setupStore()}>{children}</Provider>
        </RenderWithTheme>
      </SWRConfig>
    );
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
