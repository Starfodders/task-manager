import { createSlice } from "@reduxjs/toolkit";

export const InputSlice = createSlice({
    name: 'input',
    initialState: {
        value: ''
    },
    reducers: {
        update: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { update } = InputSlice.actions;
export const inputValue = state => state.input.value
export default InputSlice.reducer;