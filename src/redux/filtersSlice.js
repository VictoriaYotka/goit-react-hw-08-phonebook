import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: ''
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterContacts(state, {payload}) {
      state.value = payload;
    },
  },
})

export const { filterContacts } = filterSlice.actions
export const filterReducer = filterSlice.reducer