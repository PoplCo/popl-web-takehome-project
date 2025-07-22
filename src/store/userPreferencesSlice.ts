import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// 👤 User preferences state shape
interface UserPreferencesState {
  searchTerm: string
  sortBy: 'name' | 'createdAt'
  viewMode: 'list' | 'grid' // Optional: for bonus grid view
}

const initialState: UserPreferencesState = {
  searchTerm: '',
  sortBy: 'name',
  viewMode: 'list',
}

// 🛠️ User preferences slice
// TODO: Implement this Redux slice to manage user preferences
// - Search term persistence
// - Sort preference
// - View mode (bonus feature)
const userPreferencesSlice = createSlice({
  name: 'userPreferences',
  initialState,
  reducers: {
    // TODO: Add reducer functions here
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
    },
    setSortBy: (state, action: PayloadAction<'name' | 'createdAt'>) => {
      state.sortBy = action.payload
    },
    setViewMode: (state, action: PayloadAction<'list' | 'grid'>) => {
      state.viewMode = action.payload
    },
    // Bonus: Reset all preferences
    resetPreferences: () => initialState,
  },
})

export const { setSearchTerm, setSortBy, setViewMode, resetPreferences } = userPreferencesSlice.actions
export default userPreferencesSlice.reducer