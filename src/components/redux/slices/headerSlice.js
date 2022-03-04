import { createSlice } from '@reduxjs/toolkit';

const headerSlice = createSlice({
  name: 'headerSlice',
  initialState: { showHeader: false },
  reducers: {
    showHeader: (state, action) => {
      if (action.payload === 'outside') {
        state.showHeader = false;
      } else {
        state.showHeader = !state.showHeader;
      }
    },
  },
});

export const { showHeader } = headerSlice.actions;
export default headerSlice.reducer;
