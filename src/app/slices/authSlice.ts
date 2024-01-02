import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Gender, StorageKey, UserRole } from "@/common/enums";
import {
  AuthState,
  ILoginResponse,
  ILoginUser,
  IRegisterUser,
  IUser,
} from "@/common/interfaces";
import { api } from "@/api";

const INITIAL_USER: IUser = {
  id: "",
  email: "",
  lastName: "",
  firstName: "",
  phoneNumber: "",
  bod: "", // birthday
  gender: Gender.OTHER,
  createdAt: "",
  updatedAt: "",
  role: UserRole.CUSTOMER,
};

const INITIAL_STATE: AuthState = {
  isError: false,
  isLoading: false,
  user: INITIAL_USER,
  isAuthenticated: false,
};

export const login = createAsyncThunk(
  "auth/login",
  async (user: ILoginUser) => {
    return api
      .post<ILoginResponse>("/login", {
        ...user,
        role: UserRole.CUSTOMER,
      })
      .then(({ data }) => data);
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (user: IRegisterUser) => {
    return api
      .post<IUser>("/register", { ...user, role: UserRole.CUSTOMER })
      .then(({ data }) => data);
  }
);

export const checkAuth = createAsyncThunk("auth/check", async () => {
  return api.get<IUser>("/customers/me").then(({ data }) => data);
});

export const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers(builder) {
    // Login
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isAuthenticated = true;
        state.isLoading = false;
        state.user = payload.userInfo;
        localStorage.setItem(StorageKey.AccessToken, payload.accessToken);
        localStorage.setItem(StorageKey.RefreshToken, payload.refreshToken);
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });

    // Register
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });

    // Check Auth
    builder
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkAuth.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = payload;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;
