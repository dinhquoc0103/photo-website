import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authServices from "./services";


export const fetchUser = createAsyncThunk("auth/fetchUser", async () => {
    const currentUser = await authServices.getUser();
    return currentUser;
})

const authUser = JSON.parse(localStorage.getItem("AUTH_USER"));

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLogged: authUser.isLogged ?? false,
        currentUser: authUser.currentUser ?? {},
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
                state.isLogged = false;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.isLogged = true;
                state.currentUser = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.isLogged = false;
                state.error = action.error;
            })
    }
});

export const { deleteAuth } = authSlice.actions;
export default authSlice.reducer;