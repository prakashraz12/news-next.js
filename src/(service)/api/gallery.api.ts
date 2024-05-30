import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../_config";
const baseUrl = `${BASE_URL}/gallery`;

export const galleryApi = createApi({
  reducerPath: "gallery-api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getGalleryNews: builder.mutation({
      query: (searchparams) => ({
        url: "/getAll",
        method: "POST",
        body: searchparams,
      }),
    }),
    getGalleryNewsById: builder.mutation({
        query: (id) => ({
          url: `/get/${id}`,
          method: "GET"
        }),
      })
  }),
});

export const {
    useGetGalleryNewsMutation,
    useGetGalleryNewsByIdMutation
} = galleryApi;
