import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl:'https://64139d9ea68505ea73376302.mockapi.io/react-shop/' }),
  endpoints: (builder) => ({
    fetchProducts: builder.query({
      query: () => 'shoes',
    }),
  }),
});

export const { useFetchProductsQuery } = productsApi;

export default productsApi;
