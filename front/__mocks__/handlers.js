import { rest } from 'msw';
import userLoginHandler from '../__mocks__/userLogin/handlers';

export const handlers = [...Object.values(userLoginHandler)];
