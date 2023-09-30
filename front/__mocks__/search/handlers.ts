import { rest } from 'msw';
import { backUrl } from '../../config/config';
import { data } from './data';

export const getClothesWithSearch = (error?: boolean) => {
  return rest.get(`${backUrl}/posts/clothes/search`, async (req, res, ctx) => {
    if (error) {
      return res.networkError('Failed to connect');
    }
    const searchWord = req.url.searchParams.get('searchWord');
    if (searchWord === '그') {
      return res(ctx.status(200), ctx.json(data));
    } else {
      return res(ctx.status(200), ctx.json({ matchedDatas: [], totalNumber: 0 }));
    }
  });
};

const searchHandler = [getClothesWithSearch()];

export default searchHandler;
