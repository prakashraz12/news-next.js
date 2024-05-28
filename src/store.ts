import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./(service)/api/user.api";
import { mediaApi } from "./(service)/api/media.api";
import { newsApi } from "./(service)/api/news.api";
import appReducer from "./(store)/slices/app.slice";
import { settingsApi } from "./(service)/api/settings.api";
import { commentApi } from "./(service)/api/comment.ap";
export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [mediaApi.reducerPath]: mediaApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [settingsApi.reducerPath]: settingsApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      mediaApi.middleware,
      newsApi.middleware,
      settingsApi.middleware,
      commentApi.middleware
    ),
});
