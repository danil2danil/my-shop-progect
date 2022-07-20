import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isPopupActive: false,
}

const popupSlise = createSlice({
    name: "poupCart",
    initialState,
    reducers: {
        toogleCartPopup: (state)=>{
            state.isPopupActive = !state.isPopupActive
        },
    }
})

export const { toogleCartPopup } = popupSlise.actions;
export default popupSlise.reducer;