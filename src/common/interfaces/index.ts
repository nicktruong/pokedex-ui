import { Gender, UserRole } from "../enums";

export interface AuthState {
  user: IUser;
  isError: boolean;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export interface IUser {
  bod: string;
  id: string;
  email: string;
  gender: Gender;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
  lastName: string;
  firstName: string;
  phoneNumber: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface ILoginResponse {
  userInfo: IUser;
  accessToken: string;
  refreshToken: string;
}

export interface IRegisterUser {
  email: string;
  password: string;
  name: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}
