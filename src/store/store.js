import { configureStore, isPlainObject } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
// import {stor}
// import { api } from "./slices/api";

const store = configureStore({
  reducer: {
    ...rootReducer,
    // [api.reducerPath]: api.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(api.middleware), 
});
console.log(store)

export default store;
