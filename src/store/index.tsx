import { configureStore } from "@reduxjs/toolkit";

import productFilterReducer from '../reducers/product-filter.slice';
import checkoutReducer from '../reducers/checkout.slice';

export const store = configureStore({
  reducer: {
    productFilter: productFilterReducer,
    checkout: checkoutReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;