import { configureStore } from "@reduxjs/toolkit";
import sidebarReduser from "./sidebarSlise";

export const store = configureStore({
    reducer: {
        sidebar: sidebarReduser,
    },
})

