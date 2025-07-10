import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchText: '',
  category: 'All',
  region: 'All'
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setRegion: (state, action) => {
      state.region = action.payload;
    }
  }
});

export const { setSearchText, setCategory, setRegion } = filtersSlice.actions;
export default filtersSlice.reducer;
