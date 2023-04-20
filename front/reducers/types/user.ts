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
