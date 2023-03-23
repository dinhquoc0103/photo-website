import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import photosReducer from "../features/photos/photosSlice";
import filtersReducer from "../features/filters/filtersSlice";

const rootReducer = {
    photos: photosReducer,
    auth: authReducer,
    filters: filtersReducer
}

const store = configureStore({
    reducer: rootReducer,
});

export default store;