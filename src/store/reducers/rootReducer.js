import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "../slices/cartSlice";
import productSlice from "../slices/productSlice";
import fetch from "../slices/fetch";


const rootReducer = combineReducers({
    cart: cartSlice,
    products: productSlice,
    fetch: fetch
});

export default rootReducer;
