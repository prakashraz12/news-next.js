import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../_config";
const baseUrl = `${BASE_URL}/coverstory`;

export const coverStoryApi = createApi({
  reducerPath: "coverstory-api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getAllCoverstory: builder.mutation({
      query: (data) => ({
        url: "/getAll",
        method: "POST",
        body: data,
      }),
    }),
      getCoverStoryNewsbyId: builder.mutation({
          query: (id) => ({
              url: `/get/${id}`,
              method:"GET"
          })
      })
  }),
});

export const { useGetAllCoverstoryMutation, useGetCoverStoryNewsbyIdMutation } = coverStoryApi;
