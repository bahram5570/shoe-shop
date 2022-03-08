import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('likes')
  ? JSON.parse(localStorage.getItem('likes'))
  : [];

const likeSlice = createSlice({
  name: 'likeSlice',
  initialState,
  reducers: {
    liking: (state, action) => {
      if (state.includes(action.payload)) {
        const list = state.filter((x) => x !== action.payload);
        localStorage.setItem('likes', JSON.stringify(list));
        return list;
      } else {
        state.push(action.payload);
        localStorage.setItem('likes', JSON.stringify(state));
      }
    },
  },
});

export const { liking } = likeSlice.actions;
export default likeSlice.reducer;
