import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        isOpen: false,
    },
    reducers: {
        addToCart: (state, action) => {
            const index = state.items.indexOf(action.payload);
            if (index === -1) {
                state.items.push(action.payload);
            } else {
                state.items.splice(index, 1);
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item !== action.payload);
        },
        toggleCart: (state) => {
            console.log(state)
            state.isOpen = !state.isOpen;
        },
    },
});

export const { addToCart, removeFromCart, toggleCart } = cartSlice.actions;
export default cartSlice.reducer;
