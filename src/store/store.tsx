import { configureStore } from "@reduxjs/toolkit";
import authApi from "../apis/auth-api";
import expensesApi from "../apis/expense-api";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [expensesApi.reducerPath]: expensesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(expensesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
