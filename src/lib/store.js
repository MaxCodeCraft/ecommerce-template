import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "@/redux/cartSlice";

//create a store and give it slices
export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
