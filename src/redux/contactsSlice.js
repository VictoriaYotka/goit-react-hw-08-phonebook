import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const initialState = {
    items: [],
    isLoading: false,
    error: null,  
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    //     addContact(state, {payload}) {
    //         return {...state, items: [...state.items,  {
    //                 ...payload,
    //                 id: nanoid(),
    //             }]}
    //         // items.push({
    //         //     ...payload,
    //         //     id: nanoid(),
    //         // })
    //     },

    //    removeContact(state, {payload}) {
    //     return {...state, items: state.items.filter(contact => contact.id !== payload)
    //     }}
    //         // return items.filter(contact => contact.id !== payload)
    //     },
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