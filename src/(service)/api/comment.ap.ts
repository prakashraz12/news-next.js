import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = "http://localhost:8000/api/v1/comment";

export const commentApi = createApi({
  reducerPath: "comment-api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    createComment: builder.mutation({
      query: (data) => ({
        url: "/create",
        method: "POST",
        body: data,
      }),
    }),
    getComment: builder.mutation({
      query: ({ newsId, page }) => ({
        url: `/get/${newsId}?page=${page}&limit=10`,
        method: "GET",
      }),
    }),
    likeComment: builder.mutation({
      query: ({ commentId }) => ({
        url: `/${commentId}`,
        method: "GET",
      }),
    }),
    dislike: builder.mutation({
      query: ({ commentId }) => ({
        url: `/dislike/${commentId}`,
        method: "GET",
      }),
    }),
    repliedComment: builder.mutation({
      query: (body) => ({
        url: `/replies`,
        method: "POST",
        body: body,
      }),
    }),
    deleteComment: builder.mutation({
      query: ({ commentId }) => ({
        url: `/delete/${commentId}`,
        method: "GET",
      }),
    }),
    deleteReplies: builder.mutation({
      query: (body) => ({
        url: `/delete/replies`,
        method: "POST",
        body:  body ,
      }),
    }),
    updateComment: builder.mutation({
      query: (body) => ({
        url: `/update`,
        method: "POST",
        body:  body ,
      }),
    }),
    updateCommentReplies: builder.mutation({
      query: (body) => ({
        url: `/update/reply`,
        method: "POST",
        body:  body ,
      }),
    }),
  }),
});

export const {
  useCreateCommentMutation,
  useGetCommentMutation,
  useLikeCommentMutation,
  useRepliedCommentMutation,
  useDeleteCommentMutation,
  useDeleteRepliesMutation,
  useUpdateCommentMutation,
  useUpdateCommentRepliesMutation,
  useDislikeMutation
} = commentApi;
