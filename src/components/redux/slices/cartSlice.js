import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: JSON.parse(localStorage.getItem('cart')) || [],
  reducers: {
    addToCart: (state, action) => {
      const data = [...state, action.payload];
      localStorage.setItem('cart', JSON.stringify(data));
      return data;
    },

    removeFromCart: (_, action) => {
      const data = JSON.parse(localStorage.getItem('cart'));
      const index = data.findIndex(
        (x) =>
          x.id === action.payload.id &&
          x.color === action.payload.color &&
          x.size.toString() === action.payload.size.toString()
      );
      data.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(data));
      return data;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
