import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const userInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/users'
});

export const fetchSignup = createAsyncThunk('user/createUser', 
async(userRegisterInfo, thunkAPI) => {
    try {
      const response = await userInstance.post("/signup", userRegisterInfo);
      console.log(userRegisterInfo)
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
})
