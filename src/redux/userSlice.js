import { createSlice } from "@reduxjs/toolkit";
import { fetchSignup } from "./fetchUser";

const initialState = {
    token: ''
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchSignup.fulfilled, (state, {payload}) => {
            state.token = payload.token;
    })
    .addCase(fetchSignup.rejected, (state ) => {
        state.token = '';
})

}})
  
  export const userReducer = userSlice.reducer