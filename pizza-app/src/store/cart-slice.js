import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: savedCart,
  },
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    updateQuantity(state, action) {
      const { name, variant, quantity } = action.payload;
      const existingItem = state.items.find(
        (item) => item.name === name && item.variant === variant
      );
      if (existingItem) {
        existingItem.price = (existingItem.price / existingItem.quantity) * quantity; //might need to change
        existingItem.quantity = quantity;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeFromCart(state, action) {
      const { name, variant } = action.payload;
      state.items = state.items.filter(
        (item) => item.name !== name || item.variant !== variant
      );
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
