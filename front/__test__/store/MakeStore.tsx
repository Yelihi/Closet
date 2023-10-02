import { END } from 'redux-saga';
import { SagaStore } from '../../store/configureStore';

import { setupStore } from '../../util/TestUtils/renderWithProvider';

type MakeStoreProps = string[];

export const MakeStore = async (actionTypes: MakeStoreProps) => {
  const store = setupStore();

  await Promise.all(actionTypes.map(actionType => store.dispatch({ type: actionType })))
    .catch(err => console.error(err))
    .then(() => {
      store.dispatch(END);
      (store as SagaStore).sagaTask?.toPromise();
    });

  return store;
};
