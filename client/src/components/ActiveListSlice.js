import { createSlice } from "@reduxjs/toolkit";

const ActiveList = createSlice({
  name: "active",
  initialState: { value: {} },
  reducers: {
    updateActive: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateActive } = ActiveList.actions;
export const currentActive = (state) => state.active;
export default ActiveList.reducer;
