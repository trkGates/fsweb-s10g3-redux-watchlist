import { configureStore } from "@reduxjs/toolkit";
import siraReducer from "./sira";
import movieReducer from "./movieRedux";
export const store = configureStore({
  reducer: {
    sira: siraReducer,
    movie: movieReducer,
  },
});
