import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://64139d9ea68505ea73376302.mockapi.io/react-shop' }),
  endpoints: (builder) => ({
    getShoes: builder.query({
      query: () => '/shoes',
    }),
  }),
});

export const { useGetShoesQuery } = api;

