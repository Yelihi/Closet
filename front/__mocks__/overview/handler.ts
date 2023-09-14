import { rest } from 'msw';
import { OverviewResponseData } from './data';
import { backUrl } from '../../config/config';

type ResponseData = {
  lastDatas: Object;
  totalNumber: number;
  totalPrice: number;
  currentYearPrice: number;
  categori: Object;
};

export const getOverviewData = (data: ResponseData = OverviewResponseData, isfalse?: boolean) => {
  return rest.get(`${backUrl}/posts/overview`, async (req, res, ctx) => {
    if (isfalse) {
      return res(ctx.status(500));
    }

    return res(ctx.status(200), ctx.json(data));
  });
};

const overviewHandler = [getOverviewData()];

export default overviewHandler;
