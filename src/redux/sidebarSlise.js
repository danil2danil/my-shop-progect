import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isActive: false,
}

const sidebarSlise = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        toogleSidebar: (state)=>{
            state.isActive = !state.isActive
        },
    }
})

export const { toogleSidebar } = sidebarSlise.actions;
export default sidebarSlise.reducer;

