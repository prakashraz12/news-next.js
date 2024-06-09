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
    getNewsById: builder.query({
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
    getNewsByMenus: builder.query({
      query: ({ menuId }) => ({
        url: `/get/menu/${menuId}`,
        method: "GET",
      }),
    }),
    getNewsBySubMenu: builder.mutation({
      query: ({ page, limit, subMenuId }) => ({
        url: `/get/submenu/?subMenuId=${subMenuId}&page=${page}$limit=${limit}`,
        method: "POST",
      }),
    }),
    getMoreCommentedNews: builder.query({
      query: () => ({
        url: `/get/morecomment/:000`
      }),
    }),
    getProvinceNews: builder.query({
      query: () => ({
        url:"/province"
      })
    })
    
  }),
});

export const {
  useGetNewsMutation,
  useGetNewsByMenuMutation,
  useLazyGetNewsByIdQuery,
  useGetTrendingNewsMutation,
  useLazyGetNewsByMenusQuery,
  useGetNewsBySubMenuMutation,
  useGetMoreCommentedNewsQuery,
  useGetProvinceNewsQuery
} = newsApi;
