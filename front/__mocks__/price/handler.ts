import { rest } from 'msw';
import { backUrl } from '../../config/config';

import { PriceDataIn2023, PriceDataIn2022, PriceDataInEmpty } from './data';

export const getClothesPerYear = (error?: boolean) => {
  return rest.get(`${backUrl}/posts/chart`, async (req, res, ctx) => {
    if (error) {
      return res.networkError('Failed to connect');
    }
    const year = req.url.searchParams.get('year');

    if (year === '2023') {
      return res(ctx.status(200), ctx.json(PriceDataIn2023));
    }
    if (year === '2022') {
      return res(ctx.status(200), ctx.json(PriceDataIn2022));
    }

    return res(ctx.status(200), ctx.json(PriceDataInEmpty));
  });
};

const priceHandler = [getClothesPerYear()];

export default priceHandler;
