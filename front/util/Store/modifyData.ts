import { UserItemsData } from '../../components/store/data/TableData';
import { IndexArray } from '../../reducers/types/post';
import { ItemsArray } from '../Types/response';

export const modifyItmesPurchaseDate = (items: ItemsArray[] | undefined) => {
  if (!items) return [];
  const modifiedItems = [];
  for (let cloth of items) {
    modifiedItems.push({ ...cloth, purchaseDay: cloth.purchaseDay.substring(0, 7) });
  }
  return modifiedItems;
};

export const modifyIndexArray = (indexArray: IndexArray[], categoriName: string, storeCurrentPage: number) => {
  let itemsIdArray = indexArray;
  if (categoriName) itemsIdArray = indexArray.filter(item => item.categori === categoriName);
  let pageIndex = (storeCurrentPage - 1) * 9 - 1;
  let lastId = pageIndex >= 0 ? itemsIdArray[pageIndex].id : 0;

  return { lastId, itemsIdArray };
};

export const modifyUserItemCategoriData = (userItems: UserItemsData | null) => {
  let maxCategoriName = 'Outer';
  let maxCategori = 0;
  let lastMaxCategori = 0;
  if (userItems && Object.keys(userItems.categori).length !== 0 && Object.keys(userItems.lastCategori).length !== 0) {
    maxCategoriName = Object.entries(userItems.categori)?.sort((a, b) => b[1] - a[1])[0][0];
    maxCategori = Object.entries(userItems.categori)?.sort((a, b) => b[1] - a[1])[0][1];
    lastMaxCategori = Object.entries(userItems.lastCategori)?.sort((a, b) => b[1] - a[1])[0][1];
  }
  return { maxCategori, maxCategoriName, lastMaxCategori };
};
