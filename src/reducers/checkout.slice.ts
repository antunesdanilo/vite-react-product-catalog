import { createSlice } from '@reduxjs/toolkit';
import { RootState } from "../store";

import { CartItemDto } from '../modules/checkout/dtos/cart-item.dto';

export interface CheckoutState {
  items: CartItemDto[];
}

const initialState: CheckoutState = { 
  items: JSON.parse(localStorage.getItem('cartItems') || '[]') || [],
};

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    addItemToCart: (state: CheckoutState, { payload }: { payload: CartItemDto }) => {
      const found = state.items.find(item => item.product.id === payload.product.id);
      if (!found) {
        const items = [...state.items, payload];
        localStorage.setItem('cartItems', JSON.stringify(items));
        return {...state, items };
      }

      for (const item of state.items) {
        if (item.product.id === payload.product.id) {
          item.quantity += payload.quantity;
        }
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    updateItemQuantity: (state: CheckoutState, { payload }: { payload: CartItemDto }) => {
      for (const item of state.items) {
        if (item.product.id === payload.product.id) {
          item.quantity = payload.quantity;
        }
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    removeItemFromCart: (state: CheckoutState, { payload }: { payload: CartItemDto }) => {
      const item = state.items.find(item => item.product.id === payload.product.id);
      if (item) {
        const itemIndex = state.items.indexOf(item);
        state.items.splice(itemIndex, 1);
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    clearCart: (state: CheckoutState) => {
      localStorage.setItem('cartItems', JSON.stringify([]));
      return {...state, items: [] };
    },
  },
});

export const { addItemToCart, updateItemQuantity, removeItemFromCart, clearCart } = checkoutSlice.actions;

export const selectCheckout = (state: RootState) => state.checkout;

export default checkoutSlice.reducer;