import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import photosReducer from "../features/photos/photosSlice";

const rootReducer = {
    photos: photosReducer,
    auth: authReducer
}

const store = configureStore({
    reducer: rootReducer,
});

export default store;