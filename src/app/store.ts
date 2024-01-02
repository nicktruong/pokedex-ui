import { configureStore } from "@reduxjs/toolkit";
import authReducer, { checkAuth } from "./slices/authSlice";

export const configureStoreAsync = async () => {
  const store = configureStore({
    reducer: {
      auth: authReducer,
    },
  });

  await store.dispatch(checkAuth());

  return store;
};

type Store = Awaited<ReturnType<typeof configureStoreAsync>>;
export type RootState = ReturnType<Store["getState"]>;
export type AppDispatch = Store["dispatch"];
