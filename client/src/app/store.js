import { configureStore } from "@reduxjs/toolkit";
import inputReducer from '../components/InputSlice'
import listReducer from "../components/ListItemsSlice"
import postList from "../components/PostContentSlice"

const store = configureStore ({
    reducer: {
        input: inputReducer,
        list: listReducer,
        post: postList
    }
})

export default store