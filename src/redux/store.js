import { configureStore } from "@reduxjs/toolkit";
import sidebarReduser from "./sidebarSlise";
import productsReduser from './productsSlise'
export const store = configureStore({
    reducer: {
        sidebar: sidebarReduser,
        products: productsReduser,
    },
})

