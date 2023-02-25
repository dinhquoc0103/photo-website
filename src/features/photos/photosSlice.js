import { createSlice } from "@reduxjs/toolkit";


const photosSlice = createSlice({
    name: "photos",
    initialState: [],
    reducers: {
        addPhoto(state, action) {
            const newPhoto = action.payload;
            state.push(newPhoto);
        }
    }
});

export const { addPhoto } = photosSlice.actions;
export default photosSlice.reducer;