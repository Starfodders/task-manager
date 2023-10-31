import { createSlice } from "@reduxjs/toolkit";

const updateHistorySlice = createSlice({
    name: 'history',
    initialState: {
        value: false
    },
    reducers: {
        setTrue: (state) => {
            state.value = true
        },
        setFalse: (state) => {
            state.value = false
        }
    }
})

export const {setTrue, setFalse} = updateHistorySlice.actions
export const historyState = (state) => state.history
export default updateHistorySlice.reducer