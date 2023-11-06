import { ItemsArray } from '../Types/response';

export const confirmEmptyState =
  (storeCategori: string) => (loading: boolean, ItemsArray: ItemsArray[] | undefined) => {
    return !loading && !storeCategori && ItemsArray && ItemsArray.length == 0;
  };
