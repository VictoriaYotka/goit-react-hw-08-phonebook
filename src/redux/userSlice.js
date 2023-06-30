import { createSlice } from "@reduxjs/toolkit";
import { fetchLogin } from "./fetchUser";

const initialState = {
    token: '',
    email: ''
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchLogin.fulfilled, (state, {payload}) => {
            state.token = payload.token;
            state.email = payload.user.email;
    })
    .addCase(fetchLogin.rejected, (state ) => {
        state.token = '';
        state.email = ''
})

}})
  
  export const userReducer = userSlice.reducer