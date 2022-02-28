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

    userSignout: () => {
      localStorage.removeItem('currentUser');
      return { loggedUser: null };
    },

    userEdit: (_, action) => {
      const user = JSON.parse(localStorage.getItem('currentUser'));
      localStorage.removeItem('user_' + user.Username);
      localStorage.setItem(
        'user_' + user.Username,
        JSON.stringify(action.payload)
      );
      localStorage.removeItem('currentUser');
      return { loggedUser: null };
    },
  },
});

export const { userSignin, userSignout, userEdit } = signinSlice.actions;
export default signinSlice.reducer;
