import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "../slices/cartSlice";
import productSlice from "../slices/productSlice";


const rootReducer = combineReducers({
    cart: cartSlice,
    products: productSlice,
});

export default rootReducer;
