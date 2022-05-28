import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers:{
         
        removeAll:(state, action)=>{
            state.cartItems=state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.cartItemId

            )
        },

        addItemToCart:(state, action) =>{
            const timeId = new Date().getTime();
            state.cartItems.push({
                id: timeId,
                plantId: action.payload.plant.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.plant.price
            })
        },
        removeFromCart:(state, action)=>{
            state.cartItems=state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.cartItemId

            )
        }
       
    }
})
    
export const getTotalPrice = state =>{
    return state.cart.cartItems.reduce((total, cartItems)=>{
        return cartItems.totalPrice + total
    }, 0)
}

export const getCartItems = state => state.cart.cartItems;
export const { addItemToCart, removeFromCart, removeAll } = slice.actions;
export default slice.reducer;