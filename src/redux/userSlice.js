import { createSlice } from "@reduxjs/toolkit";
import { fetchLogin, fetchLogout } from "./fetchUser";

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
            state.user = payload;
    })
    .addCase(fetchLogin.rejected, (state ) => {
        state.token = '';
        state.email = ''
    })
    .addCase(fetchLogout.fulfilled, (state, {payload} ) => {
        state.token = '';
        state.user = '';
    })

}})
  
  export const userReducer = userSlice.reducer