import { configureStore } from "@reduxjs/toolkit";
import sidebarReduser from "./sidebarSlise";
import productsReduser from './productsSlise'
import popupReduser from './popupSlise'
export const store = configureStore({
    reducer: {
        sidebar: sidebarReduser,
        products: productsReduser,
        popup: popupReduser,
    },
})

