import { configureStore } from "@reduxjs/toolkit";
import inputReducer from '../components/InputSlice'
import listReducer from "../components/ListItemsSlice"
import postList from "../components/PostContentSlice"
import historyState from "../components/UpdateHistorySlice"
import ActiveListSlice from "../components/ActiveListSlice";

const store = configureStore ({
    reducer: {
        input: inputReducer,
        list: listReducer,
        post: postList,
        history: historyState,
        active: ActiveListSlice
    }
})

export default store