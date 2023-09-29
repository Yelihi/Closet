import { rest } from 'msw';
import { backUrl } from '../../config/config';
import { data } from './data';

const getClothesWithSearch = () => {
  return rest.get(`${backUrl}/posts/clothes/search`, async (req, res, ctx) => {
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
