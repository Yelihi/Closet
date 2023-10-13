import rootReducer from '..';
import { UserInitialState } from './user';
import { PostInitialState } from './post';
import { ScreenEventinitialState } from './screenEvent';
import { ChartinitialState } from './chart';

export interface rootReducerType {
  index: any;
  user: UserInitialState;
  post: PostInitialState;
  screenEvent: ScreenEventinitialState;
  chart: ChartinitialState;
}

export type RootState = ReturnType<typeof rootReducer>;
