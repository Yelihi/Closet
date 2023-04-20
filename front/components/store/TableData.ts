import type { MenuProps } from 'antd';

type ArrayLiteral<T extends ReadonlyArray<any>> = T[number];
type ObjectLiteral<T extends { [i: string]: any }> = T[keyof T];
type Literal<T> = T extends ReadonlyArray<any> ? ArrayLiteral<T> : T extends { [i: string]: any } ? ObjectLiteral<T> : never;

export const segmentItems: MenuProps['items'] = [
  {
    label: 'All',
    key: '',
  },
  {
    label: 'Outer',
    key: 'Outer',
  },
  {
    label: 'Shirt',
    key: 'Shirt',
  },
  {
    label: 'Top',
    key: 'Top',
  },
  {
    label: 'Pant',
    key: 'Pant',
  },
  {
    label: 'Shoe',
    key: 'Shoe',
  },
  {
    label: 'Muffler',
    key: 'Muffler',
  },
];

export const StoreHeader = [
  {
    text: 'Item Name',
    value: 'productName',
  } as const,
  {
    text: 'Item Categori',
    value: 'categori',
  } as const,
  {
    text: 'Cost',
    value: 'price',
  } as const,
  {
    text: 'Purchase Day',
    value: 'purchaseDay',
  } as const,
  {
    text: 'etc',
    value: 'etc',
  } as const,
];

const storeValue = StoreHeader.map(v => v.value);
type ValueType = typeof storeValue[number];

export type StoreHeaderType = {
  text: string;
  value: ValueType;
};

export type StoreItemsType = {
  id: number;
  productName: string;
  images: string;
  categori: string;
  price: number;
  purchaseDay: string;
  etc: number;
};

export interface ImagesPros {
  id: number;
  ClothId: number;
  src: string;
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

export interface categoriObject {
  [key: string]: number;
  // Outer: number;
  // Shirt: number;
  // Top: number;
  // Pant: number;
  // Shoe: number;
  // Muffler: number;
}

export interface UserItemsData {
  categori: categoriObject;
  lastCategori: categoriObject;
  standardDate: Date;
  idArray: number[];
  items: ItemsArray[];
  price: number;
  lastPrice: number;
  total: number;
  lastTotal: number;
}
