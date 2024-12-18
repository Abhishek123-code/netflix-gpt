import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    addNowPlayingMovies: null,
    addPopularMovies: null,
    videoTrailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.addNowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.addPopularMovies = action.payload;
    },
    addvideoTrailer: (state, action) => {
      state.videoTrailer = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addvideoTrailer, addPopularMovies } =
  moviesSlice.actions;
export default moviesSlice.reducer;
