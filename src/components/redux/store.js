import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from './slices/filtersSlice';
import darkModeSlice from './slices/darkModeSlice';
import loginSlice from './slices/loginSlice';

export const store = configureStore({
  reducer: {
    filterResult: filtersSlice,
    darkMode: darkModeSlice,
    loginStatus: loginSlice
  },
});
