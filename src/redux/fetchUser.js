import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const userInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/users'
});

export const setToken = (token) => {
	userInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
  localStorage.setItem('token', `Bearer ${token}`)
}

export const deleteToken = () => {
	delete userInstance.defaults.headers.common['Authorization']
  localStorage.removeItem('token')
}


export const fetchSignup = createAsyncThunk('user/createUser', 
async(userRegisterInfo, thunkAPI) => {
    try {
      const response = await userInstance.post("/signup", userRegisterInfo);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
})

export const fetchLogin = createAsyncThunk('user/loginUser',
async(userLoginInfo, thunkAPI) => {
  try {
    const response = await userInstance.post("/login", userLoginInfo);
    setToken(response.data.token)
    return response.data
    
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
})

export const fetchLogout = createAsyncThunk('user/logoutUser',
async (_, thunkAPI) => {
  try {
    const data = await userInstance.post('logout')
    deleteToken()
  return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
})

export const fetchGetUser = createAsyncThunk('user/getUser',
async(_, thunkAPI) => {
  try {
    const data = await userInstance('current')
  return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
})
