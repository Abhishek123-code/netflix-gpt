import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "gpt",
  initialState: {
    toggleGpt: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleGpt(state, action) {
      state.toggleGpt = !state.toggleGpt;
    },
    addGptMovieResults(state, action) {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleGpt, addGptMovieResults } = GptSlice.actions;
export default GptSlice.reducer;
