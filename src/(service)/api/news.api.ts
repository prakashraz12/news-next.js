import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../_config";
const baseUrl = `${BASE_URL}/news`;

export const newsApi = createApi({
  reducerPath: "news-api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    crateNews: builder.mutation({
      query: (data) => ({
        url: "/create",
        method: "POST",
        body: data,
      }),
    }),
    getNews: builder.mutation({
      query: (searchparams) => ({
        url: "/search",
        method: "POST",
        body: searchparams,
      }),
    }),
    getNewsByMenu: builder.mutation({
      query: (searchparams) => ({
        url: "/menus",
        method: "POST",
        body: searchparams,
      }),
    }),
    getNewsById: builder.mutation({
      query: (id) => ({
        url: `/get/${id}`,
        method: "GET",
      }),
    }),
    getTrendingNews: builder.mutation({
      query: ({ menuId, limit }) => ({
        url: `/get/trending`,
        method: "POST",
        body: { menuId, limit },
      }),
    }),
    getNewsByMenus: builder.mutation({
      query: ({ menuId }) => ({
        url: `/get/menu/${menuId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCrateNewsMutation,
  useGetNewsMutation,
  useGetNewsByMenuMutation,
  useGetNewsByIdMutation,
  useGetTrendingNewsMutation,
  useGetNewsByMenusMutation,
} = newsApi;
