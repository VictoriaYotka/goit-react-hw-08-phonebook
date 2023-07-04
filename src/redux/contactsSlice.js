import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, editContact } from "./fetchContacts";

const initialState = {
    items: [],
    isLoading: false,
    error: null, 
    currentContact: {}
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        setCurrentContact(state, {payload}) {
            state.currentContact = payload;
        },
    },
    extraReducers: (builder) => {
        builder
      .addCase(fetchContacts.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload
        })
        .addCase(addContact.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.error = null;
            state.items.push(payload)
        })
        .addCase(deleteContact.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                contact => contact.id === payload.id);
            state.items.splice(index, 1);
        })
        .addCase(editContact.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.error = null;
            state.isModalOpen = false;
            const index = state.items.findIndex(
                contact => contact.id === payload.id);
            state.items.splice(index, 1, payload);
        })
        .addCase(fetchContacts.pending, (state) => {
            state.isLoading = true;
            state.error = null
        })
        .addCase(fetchContacts.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        })
    }})
  
  export const contactsReducer = contactsSlice.reducer
  export const {setCurrentContact} = contactsSlice.actions