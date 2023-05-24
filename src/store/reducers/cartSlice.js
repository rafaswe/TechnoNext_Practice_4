import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        cartData:[],
        totalCartData:0,
    },
    reducers: {
        addToCart: (state, action) => {
            const newProduct = action.payload;
            
            // Check if the product already exists in the state
            const index = state.cartData.findIndex(product => product.id === newProduct.id);
           
            if(index===-1) {
                const newCreatedProduct ={
                    ...newProduct,
                    counter:1,
                }
              state.cartData.push(newCreatedProduct);
            //   console.log(updatedProduct);
            }
            else{
                const updatedProduct ={
                    ...newProduct,
                    counter:state.cartData[index].counter+1,
                }
                state.cartData[index] = updatedProduct;
               
            }
            // console.log(current(state.cartData));
            state.totalCartData +=1
        },
        removeFromCart: (state, action) => {
            // console.log(action.payload)
            state.cartData= state.cartData.filter(product=>product.id !== action.payload)
            state.totalCartData ==0
        },
        removeSingleItem:(state,action)=>{
            const index = state.cartData.findIndex(product => product.id === action.payload);
            const item = state.cartData.find(product => product.id === action.payload)
            if(index!==-1){
                const updatedProduct ={
                    ...item,
                    counter:(state.cartData[index].counter<=0)?0:(state.cartData[index].counter-1),
                }
                state.cartData[index] = updatedProduct;
                state.totalCartData<=0? 0:state.totalCartData -=1
                
            }
        }
    }
})

export const { addToCart, removeFromCart,removeSingleItem } = cartSlice.actions;
export default cartSlice.reducer;