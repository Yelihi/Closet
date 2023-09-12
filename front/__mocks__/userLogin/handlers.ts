import { rest } from 'msw';
import { backUrl } from '../../config/config';

const postUserInfo = (isfalse?: boolean) => {
  return rest.post(`${backUrl}/user/create`, async (req, res, ctx) => {
    if (isfalse) {
      return res(ctx.status(500));
    }

    return res(ctx.status(200), ctx.text('가입해주셔서 감사합니다.'));
  });
};

const userLoginHandler = [postUserInfo()];

export default userLoginHandler;
