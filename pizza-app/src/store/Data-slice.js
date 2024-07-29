import { createSlice } from "@reduxjs/toolkit";
import { fetchPizzas, removePizzas } from "./Data-thunks";

const DataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPizzas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(removePizzas.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removePizzas.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.filter((pizza) => pizza.id !== action.payload);
      })
      .addCase(removePizzas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const DataAction = DataSlice.actions;

export default DataSlice;
