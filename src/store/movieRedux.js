import { createSlice } from "@reduxjs/toolkit";

const initialState = { movieMevcut: "", movieListem: [] };

export const movieSlice = createSlice({
  name: "movieMevcut",
  initialState,
  reducers: {
    setMovieMevcut: (state, action) => {
      state.movieMevcut = action.payload;
    },
    setMovieListem: (state, action) => {
      state.movieListem = action.payload;
    },
  },
});

export const { setMovieMevcut, setMovieListem } = movieSlice.actions;

export default movieSlice.reducer;
