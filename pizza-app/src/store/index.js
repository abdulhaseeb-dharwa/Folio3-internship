import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './Cart-slice';
import dataSlice from './Data-slice';
import authSlice from './Auth-slice';

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        data: dataSlice.reducer,
        auth: authSlice.reducer,
    },
});

export default store;