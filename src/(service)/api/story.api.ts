import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../_config";
const baseUrl = `${BASE_URL}/story`;

export const storyApi = createApi({
  reducerPath: "story-api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getStoryNews: builder.query({
        query: () => ({
          url: `/getall`,
          method: "GET",
         
        })
    }),
    getStoryNewsById: builder.query({
      query: (id) => ({
        url:`/get/${id}`
      })
    })
  }),
});

export const { useGetStoryNewsQuery, useLazyGetStoryNewsByIdQuery } = storyApi;

