import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      return [...state, action.payload]
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
