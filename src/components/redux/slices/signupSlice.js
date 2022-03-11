import { createSlice } from '@reduxjs/toolkit';

const initialState = { event: null };

const signupSlice = createSlice({
  name: 'signupSlice',
  initialState,
  reducers: {
    userSignup: (_, action) => {
      if (action.payload === null) {
        return { event: null };
      }

      const storedUser = localStorage.getItem(
        'user_' + action.payload.Username
      );

      if (storedUser) {
        return { event: 'fail' };
      } else {
        const userProfile = { ...action.payload, orders: [] };
        localStorage.setItem(
          'user_' + action.payload.Username,
          JSON.stringify(userProfile)
        );
        return { event: 'success' };
      }
    },
  },
});

export const { userSignup } = signupSlice.actions;
export default signupSlice.reducer;
