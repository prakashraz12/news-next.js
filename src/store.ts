import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./(service)/api/user.api";
import { mediaApi } from "./(service)/api/media.api";
import { newsApi } from "./(service)/api/news.api";
import appReducer from "./(store)/slices/app.slice";
import cacheReducer from "./(store)/slices/cache.slice";
import adsReducer from "./(store)/slices/ads.slice";
import { settingsApi } from "./(service)/api/settings.api";
import { commentApi } from "./(service)/api/comment.ap";
import { coverStoryApi } from "./(service)/api/coverStory.api";
import { galleryApi } from "./(service)/api/gallery.api";
import { storyApi } from "./(service)/api/story.api";
import { adsApi } from "./(service)/api/ads.api";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [mediaApi.reducerPath]: mediaApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [settingsApi.reducerPath]: settingsApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
    [coverStoryApi.reducerPath]: coverStoryApi.reducer,
    [galleryApi.reducerPath]: galleryApi.reducer,
    [storyApi.reducerPath]:storyApi.reducer,
    [adsApi.reducerPath]:adsApi.reducer,
    app: appReducer,
    cache: cacheReducer,
    ads: adsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      mediaApi.middleware,
      newsApi.middleware,
      settingsApi.middleware,
      commentApi.middleware,
      coverStoryApi.middleware,
      galleryApi.middleware,
      storyApi.middleware,
      adsApi.middleware
    ),
});
