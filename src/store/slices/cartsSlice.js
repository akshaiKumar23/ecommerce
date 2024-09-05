import { createSlice } from "@reduxjs/toolkit";

export const cartsSLice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    deleteFromCart: (state, action) => {
      return state.filter((cart) => cart.id !== action.payload.id);
    },
  },
});

export const { addToCart, deleteFromCart } = cartsSLice.actions;
export const cartReducer = cartsSLice.reducer;
