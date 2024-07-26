import { fetchData } from "../services/apiService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPizzas = createAsyncThunk(
  "pizzas/fetchPizzas",
  async (endpoint, { rejectWithValue }) => {
    try {
      const data = await fetchData(endpoint);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
