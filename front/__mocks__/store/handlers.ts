import { rest } from 'msw';
import { backUrl } from '../../config/config';
import {
  initialDesktopStoreData,
  initialPhoneStoreData,
  nextDesktopStoreDataIn23,
  nextPhoneStoreData23,
  EmptyData,
} from './getClothesData';
import { resultData } from './getStoreData';

export const getClothes = (error?: boolean) => {
  return rest.get(`${backUrl}/posts/clothes/store`, async (req, res, ctx) => {
    if (error) {
      return res.networkError('Failed to connect');
    }
    const lastId = req.url.searchParams.get('lastId');
    const categori = req.url.searchParams.get('categori');
    const deviceType = req.url.searchParams.get('deviceType');

    if (deviceType === 'desktop') {
      if (categori === '' && lastId === '0') {
        return res(ctx.status(200), ctx.json(initialDesktopStoreData));
      }
      if (categori === '' && lastId === '23') {
        return res(ctx.status(200), ctx.json(nextDesktopStoreDataIn23));
      }
      if (categori === 'Outer' && lastId === '0') {
        const sortedData = initialDesktopStoreData.items.filter(item => item.categori === 'Outer');
        return res(ctx.status(200), ctx.json(sortedData));
      }
      if (categori === 'Top' && lastId === '0') {
        return res(ctx.status(200), ctx.json(EmptyData));
      }
    } else {
      if (categori === '' && lastId === '0') {
        return res(ctx.status(200), ctx.json(initialPhoneStoreData));
      }
      if (categori === '' && lastId === '23') {
        return res(ctx.status(200), ctx.json(nextPhoneStoreData23));
      }
      if (categori === 'Outer' && lastId === '0') {
        const sortedData = initialPhoneStoreData.items.filter(item => item.categori === 'Outer');
        const sortedStoreObj = { ...initialPhoneStoreData, items: sortedData };
        return res(ctx.status(200), ctx.json(sortedStoreObj));
      }
      if (categori === 'Top' && lastId === '0') {
        return res(ctx.status(200), ctx.json(EmptyData));
      }
    }
  });
};

export const getStoreData = (error?: boolean) => {
  return rest.get(`${backUrl}/posts/clothes`, async (req, res, ctx) => {
    if (error) {
      return res.networkError('Faild to connect');
    }

    return res(ctx.status(200), ctx.json(resultData));
  });
};

const storeHandler = [getClothes(), getStoreData()];

export default storeHandler;
