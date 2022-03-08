import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from './slices/filtersSlice';
import darkModeSlice from './slices/darkModeSlice';
import signupSlice from './slices/signupSlice';
import signinSlice from './slices/signinSlice';
import cartSlice from './slices/cartSlice';
import headerSlice from './slices/headerSlice';
import likeSlice from './slices/likeSlice';

export const store = configureStore({
  reducer: {
    filterResultRedux: filtersSlice,
    darkModeRedux: darkModeSlice,
    signupRedux: signupSlice,
    signinRedux: signinSlice,
    cartRedux: cartSlice,
    headerRedux: headerSlice,
    likesRedux: likeSlice
  },
});
