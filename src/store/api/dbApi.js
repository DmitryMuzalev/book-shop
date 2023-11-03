import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dbApi = createApi({
  reducerPath: "dbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (build) => ({
    addSubscribe: build.mutation({
      query: (body) => ({
        url: "subscribe",
        method: "POST",
        body,
      }),
    }),
    addMessage: build.mutation({
      query: (body) => ({
        url: "messages",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAddSubscribeMutation, useAddMessageMutation } = dbApi;
