import { configureStore } from "@reduxjs/toolkit";
import photosReducer from "../features/photos/photosSlice";

const rootReducer = {
    photos: photosReducer,
}

const store = configureStore({
    reducer: rootReducer,
});

export default store;