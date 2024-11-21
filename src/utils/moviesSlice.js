import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    addNowPlayingMovies: null,
    videoTrailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.addNowPlayingMovies = action.payload;
    },
    addvideoTrailer: (state, action) => {
      state.videoTrailer = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addvideoTrailer } = moviesSlice.actions;
export default moviesSlice.reducer;
