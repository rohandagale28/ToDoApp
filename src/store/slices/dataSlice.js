import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
  },
  reducers: {
    insert(state, action) {
      state.data = action.payload;
    },
  },
});

export default dataSlice.reducer;
export const { insert } = dataSlice.actions;
