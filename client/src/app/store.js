import { configureStore } from "@reduxjs/toolkit";
import inputReducer from '../components/InputSlice'
import listReducer from "../components/ListItemsSlice"
import postList from "../components/PostContentSlice"
import historyState from "../components/UpdateHistorySlice"

const store = configureStore ({
    reducer: {
        input: inputReducer,
        list: listReducer,
        post: postList,
        history: historyState
    }
})

export default store