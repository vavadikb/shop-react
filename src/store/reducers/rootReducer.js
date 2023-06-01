import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import cartSlice from '../slices/cartSlice';
// import { productsApi } from '../slices/productSlice'; // Импортируем API-сервис RTK Query
import productsApi from '../slices/productSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    [productsApi.reducerPath]: productsApi.reducer, // Добавляем редьюсер RTK Query для products
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware), // Добавляем middleware RTK Query для products
});

setupListeners(store.dispatch);
console.log(store.dispatch)

export default store;
