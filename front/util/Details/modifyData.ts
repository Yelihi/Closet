import { User, SingleItem } from '../../reducers/types/post';

type ExtractMeasureData = (User & SingleItem) | null;

export const extractMeasureDataInSingleItem = (singleItem: ExtractMeasureData) => {
  let measureObject = null;
  let measureValue: [string, number][] = [['name', 1]];

  if (singleItem !== null) {
    const { Outer, Top, Pant, Shirt, Shoe, Muffler } = singleItem;
    measureObject = { Outer, Top, Pant, Shirt, Shoe, Muffler };
    Object.values(measureObject).forEach(value => {
      if (value) {
        const { id, createdAt, updatedAt, ClothId, ...data2 } = value;
        measureValue = Object.entries(data2);
      }
    });
  }

  return { measureObject, measureValue };
};
