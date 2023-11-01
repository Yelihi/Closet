import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
const currentDate = dayjs().format('YYYY-MM');

export const defaultValues = {
  productName: '',
  description: '',
  image: [],
  price: null,
  color: '',
  categori: '카테고리를 선택해주세요',
  purchaseDay: currentDate,
  categoriItem: {
    shoulder: null,
    arm: null,
    totalLength: null,
    chest: null,
    rise: null,
    hem: null,
    waist: null,
    thigh: null,
    size: null,
  },
};
