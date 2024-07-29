import { fetchData,deleteData } from "../services/apiService";
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

export const removePizzas = createAsyncThunk(
  "pizzas/removePizzas",
  async (endpoint, { dispatch, rejectWithValue }) => {
    try {
      await deleteData(endpoint);
      dispatch(fetchPizzas("/pizzaData")); // Fetch pizzas again after deletion
      return endpoint;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);