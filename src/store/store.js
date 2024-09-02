import { configureStore } from "@reduxjs/toolkit";
import { favoritesReducer } from "./slices/favoritesProductsSlice";
import { categoryReducer } from "./slices/categorySlice";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    categories: categoryReducer,
  },
});
