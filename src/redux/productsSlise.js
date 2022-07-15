import { createSlice } from '@reduxjs/toolkit'
import { getAll } from '../data/dataServis';


const initialState={
    products: [],
    cart: [],
}

const productSlise = createSlice({
    name: "products",
    initialState,
    reducers: {
        getData: (state) => {
            state.products = getAll();
        },
        addItemImCart: (state, action)=>{
            state.cart.push(action.payload)
        }
    }
})


export const {getData, addItemImCart} = productSlise.actions
export default productSlise.reducer