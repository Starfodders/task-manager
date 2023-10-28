import { configureStore } from "@reduxjs/toolkit";
import inputReducer from '../components/InputSlice'
import listReducer from "../components/ListItemsSlice"

const store = configureStore ({
    reducer: {
        input: inputReducer,
        list: listReducer
    }
})

export default store