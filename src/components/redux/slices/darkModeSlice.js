import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('darkMode') || false;

const darkModeSlice = createSlice({
  name: 'darkModeSlice',
  initialState,
  reducers: {
    mode: (state) => {
      return !state;
    },
  },
});

export const { mode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
