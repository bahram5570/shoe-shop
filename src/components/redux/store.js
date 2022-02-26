import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from './slices/filtersSlice';
import darkModeSlice from './slices/darkModeSlice';

export const store = configureStore({
  reducer: {
    filterResult: filtersSlice,
    darkMode: darkModeSlice
  },
});
