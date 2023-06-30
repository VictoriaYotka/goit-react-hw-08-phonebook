import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const userInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/users'
});

export const fetchSignup = createAsyncThunk('user/createUser', 
async(userRegisterInfo, thunkAPI) => {
    try {
      const response = await userInstance.post("/signup", userRegisterInfo);
      localStorage.setItem('token', JSON.stringify(response.data.token))
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
})

export const fetchLogin = createAsyncThunk('user/loginUser',
async(userLoginInfo, thunkAPI) => {
  try {
    const response = await userInstance.post("/login", userLoginInfo);
    return response.data
    
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
})

export const fetchLogout = createAsyncThunk('user/logoutUser',
async () => {
  const data = await userInstance.post('logout')
  return data

}
)

export const fetchGetUser = createAsyncThunk('user/getUser',
async() => {
  const data = await userInstance('current')
  return data
}
)




// import axios from 'axios'

// const instance = axios.create({
// 	baseURL: 'https://api.escuelajs.co/api/v1/',
// })

// export const setToken = (token) => {
// 	instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
// }

// export const dellToken = () => {
// 	delete instance.defaults.headers.common['Authorization']
// }

// export const signUp = async (body) => {
// 	return await instance.post('/users', body)
// }

// export const login = async (body) => {
// 	const { data } = await instance.post('/auth/login', body)
// 	if ('access_token' in data) setToken(data.access_token)
// 	return data
// }

// export const getProfile = async () => {
// 	const { data } = await instance('/auth/profile')
// 	return data
// }



// import { createAsyncThunk } from '@reduxjs/toolkit'
// import { getProfile, login } from '../../api/auth'

// export const getProfileThunk = createAsyncThunk('auth/profile', () =>
// 	getProfile()
// )

// export const loginThunk = createAsyncThunk(
// 	'auth/login',
// 	async (body, { rejectWithValue, dispatch }) => {
// 		try {
// 			const data = await login(body)
// 			dispatch(getProfileThunk())
// 			return data
// 		} catch (error) {
// 			return rejectWithValue(error.response.data.message)
// 		}
// 	}
// )