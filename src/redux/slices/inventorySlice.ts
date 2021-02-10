import { createSlice } from '@reduxjs/toolkit';
import { getInventory } from '../thunks/InventoryThunks';
import { InventoryHash, InventoryType } from '../types';

type stateTypes = {
  collection: InventoryHash;
  list: InventoryType[];
};

const initialState: stateTypes = {
  list: [],
  collection: {}
};

const { reducer } = createSlice({
  name: 'inventory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInventory.fulfilled, (s, a) => {
      s.list = a.payload.list;
      s.collection = a.payload.collection;
    });
  },
});

export const inventoryActions = {};

export default reducer;
