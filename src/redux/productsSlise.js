import { createSlice } from '@reduxjs/toolkit'
import { getAll } from '../data/dataServis';



const initialState = {
    products: [],
    cart: [],
    filters: [],
}



const productSlise = createSlice({
    name: "products",
    initialState,
    reducers: {
        getData: (state) => {
            state.products = getAll();
        },
        addItemImCart: (state, action) => {
            state.cart.push(action.payload)
        },
        aplyFilters: (state, action) => {
            let temp = getAll()
            let filteredProducts = []
            state.filters = state.filters.concat(action.payload)
            state.filters.forEach(element => {
                if ("brand" in element) {
                    filteredProducts = filteredProducts.concat(temp.filter(item => item.brand === element.brand))
                }
            });
            if (filteredProducts.length !== 0) {
                state.products = filteredProducts;
            }
            else {
                state.products = temp;
            }
            filteredProducts = []
            state.filters = []
        },
        filterItems: (state, action) => {

        },
        filterItemsType: (state, action) => {

        },
        filterItemsSize: (state, action) => {

        },

    }
})


export const { getData, addItemImCart, filterItems, aplyFilters } = productSlise.actions
export default productSlise.reducer