import { createSlice } from '@reduxjs/toolkit';

const initialState = () => {
  if (localStorage.getItem('darkMode')) {
    return localStorage.getItem('darkMode') === 'true' ? true : false;
  } else {
    return false;
  }
};

const darkModeSlice = createSlice({
  name: 'darkModeSlice',
  initialState: initialState(),
  reducers: {
    mode: (state) => {
      localStorage.setItem('darkMode', !state);
      return !state;
    },
  },
});

export const { mode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
