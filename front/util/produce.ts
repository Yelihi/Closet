import { enableES5, produce } from 'immer';

export default <T, U = T>(...args: Parameters<typeof produce>): U | void => {
  enableES5();
  return produce(...args) as U | void;
};
