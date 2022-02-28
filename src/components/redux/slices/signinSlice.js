import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedUser: JSON.parse(localStorage.getItem('currentUser')) || null,
};

const signinSlice = createSlice({
  name: 'signinSlice',
  initialState,
  reducers: {
    userSignin: (_, action) => {
      const currentUser = JSON.parse(
        localStorage.getItem('user_' + action.payload.Username)
      );

      if (currentUser) {
        if (currentUser.Password === action.payload.Password) {
          localStorage.setItem('currentUser', JSON.stringify(currentUser));
          return { loggedUser: currentUser };
        } else {
          return { loggedUser: 'wrong' };
        }
      } else {
        return { loggedUser: 'fail' };
      }
    },
  },
});

export const { userSignin } = signinSlice.actions;
export default signinSlice.reducer;
