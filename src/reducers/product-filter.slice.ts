import { createSlice } from '@reduxjs/toolkit';
import { RootState } from "../store";

export interface ProductFilterState {
  categoryId?: number;
  keyword?: string;
}

const initialState: ProductFilterState = {};

export const productFilterSlice = createSlice({
  name: 'productFilter',
  initialState,
  reducers: {
    setCategoryId: (state: ProductFilterState, { payload }: { payload: number | undefined }) => {
      return {...state, categoryId: payload };
    },
    setKeyword: (state: ProductFilterState, { payload }: { payload: string | undefined }) => {
      return {...state, keyword: payload };
    },
  },
});

export const { setCategoryId, setKeyword } = productFilterSlice.actions;

export const selectProductFilter = (state: RootState) => state.productFilter;

export default productFilterSlice.reducer;