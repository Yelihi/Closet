import { rest } from 'msw';
import { backUrl } from '../../config/config';
import { data } from './data';

const getClothesWithSearch = (delayedValue: string = '') => {
  return rest.post(`${backUrl}/posts/clothes/search?searchWord=${delayedValue}`, async (req, res, ctx) => {
    if (delayedValue === '그') {
      return res(ctx.status(200), ctx.json(data));
    } else {
      return res(ctx.status(200), ctx.json({ matchedDatas: [], totalNumber: 0 }));
    }
  });
};

const searchHandler = [getClothesWithSearch()];

export default searchHandler;
