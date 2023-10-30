import { createSlice } from "@reduxjs/toolkit";

const postList = createSlice({
  name: "posted",
  initialState: {
    value: { title: 'New List', tasks: [] },
  },
  reducers: {
    updateTitle: (state, action) => {
      state.value.title = action.payload
    },
    updateTasks: (state, action) => {
      state.value.tasks = action.payload
    }
  },
});

export const {updateTitle, updateTasks} = postList.actions
export const prePostContents = (state) => state.post
export default postList.reducer