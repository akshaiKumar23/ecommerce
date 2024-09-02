import { configureStore } from "@reduxjs/toolkit";
import { favoritesReducer } from "./slices/favoritesProductsSlice";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});
