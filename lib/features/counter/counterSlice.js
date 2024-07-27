import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const hamburgerSlice = createSlice({
  name: "hamburger",
  initialState,
  reducers: {
    changeValue: (state, action) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeValue } = hamburgerSlice.actions;

export default hamburgerSlice.reducer;
