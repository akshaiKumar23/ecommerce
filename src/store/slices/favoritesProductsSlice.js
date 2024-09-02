import { createSlice } from "@reduxjs/toolkit";

export const favoritesProductsSlice = createSlice({
  name: "favorite",
  initialState: [],
  reducers: {
    addFavorites: (state, action) => {
      const isIndexExist = state.findIndex((f) => f.id === action.payload.id);
      if (isIndexExist === -1) {
        state.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      return state.filter((favorite) => favorite.id !== action.payload.id);
    },
  },
});

export const { addFavorites, removeFavorite } = favoritesProductsSlice.actions;

export const favoritesReducer = favoritesProductsSlice.reducer;
