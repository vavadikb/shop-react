import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const response = await fetch(
            "https://64139d9ea68505ea73376302.mockapi.io/react-shop/shoes"
        );
        const json = await response.json();
        return json;
    }
);
const productSlice = createSlice({
    name: "fetch",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                return action.payload;
            });
    },
});



export default productSlice.reducer;
