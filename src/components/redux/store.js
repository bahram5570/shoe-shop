import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from './slices/filtersSlice';
import darkModeSlice from './slices/darkModeSlice';
import signupSlice from './slices/signupSlice';
import signinSlice from './slices/signinSlice';
import cartSlice from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    filterResultRedux: filtersSlice,
    darkModeRedux: darkModeSlice,
    signupRedux: signupSlice,
    signinRedux: signinSlice,
    cartRedux: cartSlice,
  },
});
