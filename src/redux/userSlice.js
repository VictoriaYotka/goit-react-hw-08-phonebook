import { createSlice } from "@reduxjs/toolkit";
import { fetchGetUser, fetchLogin, fetchLogout } from "./fetchUser";

const initialState = {
    token: localStorage.getItem('token') ?? '',
    user: {}
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchLogin.fulfilled, (state, {payload}) => {
            state.token = payload.token;
            state.user = payload.user;
    })
    .addCase(fetchLogin.rejected, (state ) => {
        state.token = '';
        state.user = {}
    })
    .addCase(fetchLogout.fulfilled, (state ) => {
        state.token = '';
        state.user = {};
    })
    .addCase(fetchGetUser.fulfilled, (state, {payload} ) => {
        // state.token = '';
        state.user = payload;
    })

}})
  
  export const userReducer = userSlice.reducer