import { configureStore } from '@reduxjs/toolkit'
import userPreferencesReducer from './userPreferencesSlice'

// 🏪 Redux store configuration
// TODO: Configure the store with the userPreferences reducer
export const store = configureStore({
  reducer: {
    userPreferences: userPreferencesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch