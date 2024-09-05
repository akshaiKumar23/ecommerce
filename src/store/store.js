import { configureStore } from "@reduxjs/toolkit";
import { favoritesReducer } from "./slices/favoritesProductsSlice";
import { categoryReducer } from "./slices/categorySlice";
import { cartReducer } from "./slices/cartsSlice";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    categories: categoryReducer,
    carts: cartReducer,
  },
});
