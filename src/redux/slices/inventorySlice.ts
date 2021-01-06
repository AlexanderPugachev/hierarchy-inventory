import { createSlice } from "@reduxjs/toolkit";
import { getInventory } from '../thunks/InventoryThunks';

export type InventoryType = {
  id: string,
  name: string,
  count: number,
  placeId: string
};

type stateTypes = {
  list: InventoryType[],
}

const initialState: stateTypes = {
  list: [],
};

const { reducer } = createSlice({
  name: 'inventory',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getInventory.fulfilled, (s, a) => {
      s.list = a.payload;
    });
  }
});

export const inventoryActions = {};

export default reducer;