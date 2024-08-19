import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    upcomingMovies: null,
    trailerVideo: null,
  },
  reducers : {
    addNowPlayingMovies:(state, action) => {
        state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo:(state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies:(state, action) => {
      state.popularMovies = action.payload
    },
    addUpcomingMovies:(state, action) => {
      state.upcomingMovies = action.payload
    },
  }
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies,addUpcomingMovies } = movieSlice.actions;
export default movieSlice.reducer;