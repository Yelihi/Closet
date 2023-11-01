import { AddInitialValue } from '../../components/recycle/types/recycleElementsTypes';
import { User, SingleItem } from '../../reducers/types/post';

type RevertFetchDataProps = User & SingleItem;

export const revertFetchDataToFormData = (data: RevertFetchDataProps, defaultValues: AddInitialValue) => {
  const { Outer, Shirt, Top, Pant, Shoe, Muffler, ...singleData } = data;
  const categoriObject = [Outer, Shirt, Top, Pant, Shoe, Muffler].filter(v => v !== null)[0];
  const { id, createdAt, updatedAt, ClothId, ...measure } = categoriObject!;
  const { categoriItem, ...rest } = defaultValues;
  const measureItem = { categoriItem: { ...categoriItem, ...measure } };
  return { ...singleData, ...measureItem };
};
