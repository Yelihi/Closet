// GET posts/overview

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

export interface ItemsArray {
  Images: ImagesPros[];
  UserId: number;
  categori: string;
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
