import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../_config";
const baseUrl = `${BASE_URL}/user`;

export const authApi = createApi({
  reducerPath:"auth-api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: "/create",
        method: "POST",
        body: userData,
      }),
    }),
    verifyEmail: builder.mutation({
      query: (token) => ({
        url: `/verify-email/${token}`,
      }),
    }),
    resendVerifyEmail: builder.mutation({
      query: (token) => ({
        url: `/resend-verify-email/${token}`,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (email) => ({
        url: `/forgot-password/`,
        method: "POST",
        body: email,
      }),
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: `/reset-password`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useVerifyEmailMutation,
  useResendVerifyEmailMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation
} = authApi;
