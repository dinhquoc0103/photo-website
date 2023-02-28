import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authServices from "./services";


export const fetchUser = createAsyncThunk("auth/fetchUser", async () => {
    const currentUser = await authServices.getUser();
    return currentUser;
})

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLogged: false,
        isLoading: false,
        currentUser: {},
        error: ''
    },
    reducers: {
        deleteAuth(state, action) {
            state.isLogged = action.payload.isLogged;
            state.currentUser = action.payload.currentUser;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.isLogged = true;
                state.isLoading = false;
                state.currentUser = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error;
            })
    }
});

export const { deleteAuth } = authSlice.actions;
export default authSlice.reducer;