import { rest } from 'msw';
import userLoginHandler from '../__mocks__/userLogin/handlers';
import overviewHandler from '../__mocks__/overview/handler';
import searchHandler from './search/handlers';
import storeHandler from './store/handlers';

export const handlers = [
  ...Object.values(userLoginHandler),
  ...Object.values(overviewHandler),
  ...Object.values(searchHandler),
  ...Object.values(storeHandler),
];
