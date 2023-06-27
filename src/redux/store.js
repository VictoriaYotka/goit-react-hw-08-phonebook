import { configureStore } from '@reduxjs/toolkit'
import { contactsReducer } from './contactsSlice'
import { filterReducer } from './filtersSlice'
import { userReducer } from './userSlice'

export const store = configureStore({ 
  reducer: {
    user: userReducer,
    contacts: contactsReducer,
    filter: filterReducer,
}
})
