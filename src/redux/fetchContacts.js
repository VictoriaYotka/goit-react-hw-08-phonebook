import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const contactsInstance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com'
  });

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', 
async(_, thunkAPI) => {
    try {
      const response = await contactsInstance.get("/contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
})

export const addContact = createAsyncThunk('contacts/addContact', 
async (contact, thunkAPI) => {
    try {
      const response = await contactsInstance.post("/contacts", { ...contact });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  })

export const deleteContact = createAsyncThunk('contacts/deleteContact', 
async (id, thunkAPI) => {
    try {
        const response = await contactsInstance.delete(`/contacts/${id}`);
        return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }}
)