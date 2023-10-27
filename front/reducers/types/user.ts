export interface User {
  id: number;
  email: string;
  nickname: string;
  src: string;
  snsId: string;
  provider: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserInitialState {
  updateUserInfoLoading: boolean;
  updateUserInfoDone: boolean;
  updateUserInfoError: string | null;
  deletePreviewImageDone: boolean;
  uploadPreviewImageLoading: boolean;
  uploadPreviewImageDone: boolean;
  uploadPreviewImageError: string | null;
  loadToMyInfoDone: boolean;
  loadToMyInfoError: string | null;
  logInLoading: boolean;
  logInDone: boolean;
  logInError: string | null;
  logOutLoading: boolean;
  logOutDone: boolean;
  logOutError: string | null;
  signInLoading: boolean;
  signInDone: boolean;
  signInError: string | null;
  me: User | null;
  userProfileImages: string;
}

export interface UserInfo {
  email: string;
  password: string;
}

export interface UserSignUp {
  email: string;
  nickname: string;
  password: string;
  src: string;
}

export interface PatchUserInfo {
  nickname: string;
  src: string;
  // 이후 추가될 예정
}
