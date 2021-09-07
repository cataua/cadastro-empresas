import { createSlice } from "@reduxjs/toolkit";

export const stateSlice = createSlice({
    name: 'menuState',
    initialState: {
        value: false,
    },
    reducers: {
        openMenu: (state) => {
            state.value = true
        },
        closeMenu: (state) => {
            state.value = false;
        }
    },
});

export const { openMenu, closeMenu } = stateSlice.actions;

export default stateSlice.reducer;