import { rest } from 'msw';
import userLoginHandler from '../__mocks__/userLogin/handlers';
import overviewHandler from '../__mocks__/overview/handler';
import searchHandler from './search/handlers';
import storeHandler from './store/handlers';
import priceHandler from './price/handler';

export const handlers = [
  ...Object.values(userLoginHandler),
  ...Object.values(overviewHandler),
  ...Object.values(searchHandler),
  ...Object.values(storeHandler),
  ...Object.values(priceHandler),
];
