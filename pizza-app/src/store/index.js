import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './Cart-slice';
import dataSlice from './Data-slice';

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        data: dataSlice.reducer,
    },
});

export default store;