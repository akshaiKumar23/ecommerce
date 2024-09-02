import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: "",
  reducers: {
    setCategory: (state, action) => action.payload,
  },
});

export const { setCategory } = categorySlice.actions;

export const categoryReducer = categorySlice.reducer;
