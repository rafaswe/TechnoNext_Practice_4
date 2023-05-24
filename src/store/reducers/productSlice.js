import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const STATUS = Object.freeze(
    {
        LOADING: "LODING",
        SUCCESS: "SUCCESS",
        ERROR: "ERROR"
    }
) 

const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        status:STATUS.LOADING,
    },
    // reducers: {
    //     getProducts: (state, action) => {
    //         state.data = action.payload;
    //         state.status = "Products is Founded";
    //     },
    // },
    extraReducers:((builder)=>{
        builder
        .addCase(fetchProducts.pending,(state) => {
            state.status = STATUS.LOADING;
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.data= action.payload;
            state.status = STATUS.SUCCESS;
        })
        .addCase(fetchProducts.rejected,(state)=>{
            state.status = STATUS.ERROR;
        });
    }),
});

export const { getProducts } = productSlice.actions;

export default productSlice.reducer;

//Thunks
export const fetchProducts = createAsyncThunk('products/fetch', async ()=>{
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        // console.log(response)
        return response.data;
      } catch (error) {
        throw Error('Failed to fetch products');
      }
})