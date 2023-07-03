import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { contactsInstance } from "./fetchContacts";

const userInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/users'
});

export const setToken = (token) => {
	userInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  contactsInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  localStorage.setItem('token', token)
}

export const deleteToken = () => {
	delete userInstance.defaults.headers.common['Authorization'];
  delete contactsInstance.defaults.headers.common['Authorization']
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
  // const state = thunkAPI.getState();
  // console.log(state)
  // console.log(userLoginInfo)
  try {
    const response = await userInstance.post("/login", userLoginInfo);
    setToken(response.data.token)
    // console.log(response.data)
    return response.data
    
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
})

export const fetchLogout = createAsyncThunk('user/logoutUser',
async (_, thunkAPI) => {
  try {
    const response = await userInstance.post('logout')
    deleteToken()
    // console.log(response)
  return response
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
})

export const fetchGetUser = createAsyncThunk('user/getUser',
async(_, thunkAPI) => {
  const state = thunkAPI.getState();
  // console.log(state)
    setToken(state.user.token)

  try {
    const response = await userInstance('current')
    // console.log(response.data)
    fetchLogin(response.data)
  return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
})
