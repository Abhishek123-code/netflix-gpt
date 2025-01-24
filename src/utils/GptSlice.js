import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "gpt",
  initialState: {
    toggleGpt: false,
  },
  reducers: {
    toggleGpt(state, actions) {
      state.toggleGpt = !state.toggleGpt;
    },
  },
});

export const { toggleGpt } = GptSlice.actions;
export default GptSlice.reducer;
