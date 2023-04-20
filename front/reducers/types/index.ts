import rootReducer from '..';
import { UserInitialState } from './user';
import { PostInitialState } from './post';
import { ScreenEventinitialState } from './screenEvent';

export interface rootReducerType {
  index: any;
  user: UserInitialState;
  post: PostInitialState;
  screenEvent: ScreenEventinitialState;
}

export type RootState = ReturnType<typeof rootReducer>;
