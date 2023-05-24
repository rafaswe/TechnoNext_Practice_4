import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartSlice";
import productSlice from "./reducers/productSlice";

const store = configureStore({
    reducer:{
        product: productSlice,
        cart: cartSlice,
    }
})
export default store;