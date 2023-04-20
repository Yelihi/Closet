import { UserItemsData } from '../../components/store/TableData';

export interface VisionSearch {
  name: string;
  confidence: number;
}

export interface ImagePathObject {
  src: string;
  visionSearch: VisionSearch[];
}

export interface User {
  id: number;
  productName: string;
  description: string;
  price: number;
  color: string;
  categori: string;
  purchaseDay: string;
  preference: number;
  createdAt: string;
  updatedAt: string;
  UserId: number;
}

export type Image = {
  id: number;
  src: string;
  createdAt: string;
  updatedAt: string;
  ClothId: number;
};

export type UpperBody = {
  id: number;
  shoulder: number;
  arm: number;
  totalLength: number;
  chest: number;
  createdAt: string;
  updatedAt: string;
  ClothId: number;
};

export type LowerBody = {
  id: number;
  totalLength: number;
  rise: number;
  hem: number;
  waist: number;
  thigh: number;
  createdAt: string;
  updatedAt: string;
  ClothId: number;
};

export type FootSize = {
  id: number;
  size: number;
  createdAt: string;
  updatedAt: string;
  ClothId: number;
};

export type TotalLength = {
  id: number;
  totalLength: number;
  createdAt: string;
  updatedAt: string;
  ClothId: number;
};

export interface SingleItem {
  Outer: UpperBody | null;
  Top: UpperBody | null;
  Pant: LowerBody | null;
  Shirt: UpperBody | null;
  Shoe: FootSize | null;
  Muffler: TotalLength | null;
  Images: Image[] | null;
}

export interface IndexArray {
  id: number;
  categori: string;
}

export interface PostInitialState {
  showDrawer: boolean;
  loadItemLoding: boolean;
  loadItemDone: boolean;
  loadItemError: boolean;
  loadItemsLoding: boolean;
  loadItemsDone: boolean;
  loadItemsError: boolean;
  uploadItemsLoding: boolean;
  uploadItemsDone: boolean;
  uploadItemsError: boolean;
  imageUploadLoding: boolean;
  imageUploadDone: boolean;
  imageUploadError: boolean;
  deleteItemLoding: boolean;
  deleteItemDone: boolean;
  deleteItemError: boolean;
  lastAddDataIndex: number | '';
  user: User | null;
  imagePath: ImagePathObject[];
  singleItem: (User & SingleItem) | null;
  indexArray: IndexArray[];
  userItems: UserItemsData | null;
}
