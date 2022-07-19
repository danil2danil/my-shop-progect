import { createSlice } from '@reduxjs/toolkit'
import { getAll } from '../data/dataServis';



const initialState = {
    products: [],
    cart: [],
    filters: [],
    searchValue: [""]
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
            if (state.filters.some(el => "brand" in el)) {
                state.filters.forEach(element => {
                    if ("brand" in element) {
                        filteredProducts = filteredProducts.concat(temp.filter(item => item.brand === element.brand))
                    }
                });
            }
            else filteredProducts = temp
            if (state.filters.some(el => "specialization" in el)) {
                state.filters.forEach(element => {
                    if ("specialization" in element) {
                        filteredProducts = filteredProducts.filter((item => item.specialization.includes(element.specialization)))
                    }
                });
            }
            if (state.filters.some(el => "waterproof" in el)) {
                state.filters.forEach(element => {
                    if ("waterproof" in element) {
                        filteredProducts = filteredProducts.filter((item => item.waterproof===element.waterproof))
                    }
                });
            }
            state.products = filteredProducts;
            state.filters = []
        },
        handleChangeSearch: (state, action) => {
            state.searchValue = action.payload
        }
    }
})


export const { getData, addItemImCart, aplyFilters, handleChangeSearch } = productSlise.actions
export default productSlise.reducer