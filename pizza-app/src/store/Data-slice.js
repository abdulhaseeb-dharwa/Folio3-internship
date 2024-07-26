import { createSlice } from "@reduxjs/toolkit";
import { fetchPizzas } from "./Data-thunks";

const DataSlice = createSlice({
    name: 'data',
    initialState: {
        data:[],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchPizzas.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }   
});

export const DataAction = DataSlice.actions;

export default DataSlice;