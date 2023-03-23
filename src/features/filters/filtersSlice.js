import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        categoryId: null
    },
    reducers: {
        categoryChanged(state, action) {
            state.categoryId = action.payload;
        }
    }
});

export const { categoryChanged } = filtersSlice.actions;
export default filtersSlice.reducer;