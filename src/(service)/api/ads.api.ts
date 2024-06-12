import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../_config";
const baseUrl = `${BASE_URL}/ads`;

export const adsApi = createApi({
  reducerPath: "ads-api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getAdsByPosition: builder.query({
      query: (position) => ({
        url: `/get/${position}`,
        method: "GET"
      }),
    }),
    clickOnAds: builder.query({
      query: (id) => ({
        url: `/click/${id}`,
        method: "GET"
      }),
    }),
  }),
});

export const {
  useLazyGetAdsByPositionQuery,
  useLazyClickOnAdsQuery
} = adsApi;
