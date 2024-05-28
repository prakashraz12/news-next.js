import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = "http://localhost:8000/api/v1/news";

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
  }),
});

export const {
  useCrateNewsMutation,
  useGetNewsMutation,
  useGetNewsByMenuMutation,
  useGetNewsByIdMutation,
  useGetTrendingNewsMutation,
} = newsApi;
