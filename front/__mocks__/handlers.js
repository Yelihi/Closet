import { rest } from 'msw';
import userLoginHandler from '../__mocks__/userLogin/handlers';
import overviewHandler from '../__mocks__/overview/handler';

export const handlers = [...Object.values(userLoginHandler), ...Object.values(overviewHandler)];
