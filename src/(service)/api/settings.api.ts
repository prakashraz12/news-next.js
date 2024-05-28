import { addSettings } from "@/(store)/slices/app.slice";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = "http://localhost:8000/api/v1/settings";

export const settingsApi = createApi({
  reducerPath: "settings-api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getSettings: builder.mutation({
      query: () => ({
        url: "/get",
        method: "GET",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          if (data?.code === 200) {
            dispatch(addSettings(data?.data));
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useGetSettingsMutation } = settingsApi;
