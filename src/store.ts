import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./(service)/api/user.api";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath] :authApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});
