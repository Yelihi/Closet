import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction, combineReducers } from 'redux';

import user from './user';
import post from './post';
import screenEvent from './screenEvent';

import { rootReducerType } from './types';

const rootReducer = (state: rootReducerType | undefined, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      // console.log('HYDRATE', action);
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        user,
        post,
        screenEvent,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
