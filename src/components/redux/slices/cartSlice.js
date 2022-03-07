import { createSlice } from '@reduxjs/toolkit';
import { cartLogic } from '../logics/cartLogic';

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
      const { data } = cartLogic(action.payload);
      localStorage.setItem('cart', JSON.stringify(data));
      return data;
    },

    qtCart: (_, action) => {
      const { data, index } = cartLogic(action.payload);
      data.splice(index, 0, action.payload);
      localStorage.setItem('cart', JSON.stringify(data));
      return data;
    },

    clearCart: () => {
      return [];
    },
  },
});

export const { addToCart, removeFromCart, qtCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
