import { createSlice } from '@reduxjs/toolkit'


const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addCart: (state, action) => {      //productData
            let productData = action.payload
            let pid = productData.id
            let existingProductIdx = state.cart.findIndex(
                (cartObj) => cartObj.data.id === pid)
            if (existingProductIdx != -1) {
                let existingProduct = state.cart[existingProductIdx]
                existingProduct.quantity = existingProduct.quantity + 1
            } else {
                let cartObj = { data: productData, quantity: 1 }
                state.cart.push(cartObj)
            }
        },
        removeCart: (state, action) => {          //product.id
            let pid = action.payload
            let existingProductIdx = state.cart.findIndex((cartObj) => cartObj.data.id === pid)
            state.cart.splice(existingProductIdx, 1)

        },
        QuantityIncrease: (state, action) => {    //Id
            let pid = action.payload
            let existingProductIdx = state.cart.findIndex(
                (cartObj) => cartObj.data.id === pid)
            let existingProduct = state.cart[existingProductIdx]
            existingProduct.quantity = existingProduct.quantity + 1
        },
        QuantityDecrese: (state, action) => {    //Id
            let pid = action.payload
            let existingProductIdx = state.cart.findIndex(
                (cartObj) => cartObj.data.id === pid)
            let existingProduct = state.cart[existingProductIdx]

            if (existingProduct.quantity > 1) {


                existingProduct.quantity = existingProduct.quantity - 1
            } else {
                state.cart.splice(existingProductIdx, 1)
            }
        },
        clearCart: (start, action) => {
            start.cart.length = 0
        },

         AscendingRating: (state) => {
            let cartItems = state.cart

            cartItems.sort((a, b) => {
                return a.data.rating - b.data.rating;
            })
            state.cart = cartItems
        },
         DesecndingRating: (state) => {
            let cartItems = state.cart

            cartItems.sort((a, b) => {
                return b.data.rating - a.data.rating;
            })
            state.cart = cartItems
        }
    }
})

export const { addCart, removeCart, QuantityIncrease, QuantityDecrese, clearCart, AscendingRating, DesecndingRating } = CartSlice.actions
export default CartSlice.reducer