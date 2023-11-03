import { createSlice } from "@reduxjs/toolkit";

const ListItems = createSlice({
  name: "list",
  initialState: {
    value: [],
  },
  reducers: {
    update: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    remove: (state, action) => {
      state.value = action.payload
    },
    clearList: (state) => {
      state.value = []
    }
  },
});

export const { update, clearList, remove } = ListItems.actions;
export const listValue = (state) => state.list.value;
export default ListItems.reducer;
