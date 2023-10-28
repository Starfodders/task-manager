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
  },
});

export const { update } = ListItems.actions;
export const listValue = (state) => state.list.value;
export default ListItems.reducer;
