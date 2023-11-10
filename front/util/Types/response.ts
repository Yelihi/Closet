// GET posts/overview

import { SingleItem, User } from '../../reducers/types/post';

export interface ImagesPros {
  id: number;
  ClothId: number;
  src: string;
}

export interface CategoriObj {
  Outer: number;
  Top: number;
  Shirt: number;
  Pant: number;
  Shoe: number;
  Muffler: number;
}
export type Categories = keyof CategoriObj;

export interface ItemsArray {
  Images: ImagesPros[];
  UserId: number;
  categori: Categories;
  color: string;
  createdAt: string;
  description: string;
  id: number;
  price: number;
  productName: string;
  purchaseDay: string;
  updatedAt: string;
}

export interface Overview {
  lastDatas: ItemsArray[] | never[];
  totalNumber: number;
  totalPrice: number;
  currentYearPrice: number;
  categori: CategoriObj | {};
  theOldestData: ItemsArray;
}

// GET posts/search?searchValue

export interface MatchedDataArray {
  matchedDatas: ItemsArray[];
  totalNumber: number;
}

// GET posts/clothes/store

export interface FetchingDataInDesktop {
  items: ItemsArray[];
}

// GET posts/chart?year

export interface FetchingDataPerYear {
  items: ItemsArray[];
  totalAmount: number;
}

// GET post/clothes/:clothId

export type FetchingSingleItem = (User & SingleItem) | null;
