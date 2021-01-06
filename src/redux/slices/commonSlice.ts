import { createSlice } from '@reduxjs/toolkit';
import { InventoryType } from './inventorySlice';

export enum DrawersId {
  'AddInventory',
  'AddPlace',
}

type DrawerType = {
  visible: boolean;
  data?: InventoryType;
};

type StateType = {
  drawers: { [key: string]: DrawerType };
};

type SetDrawerType = DrawerType & {
  id: number;
};

const initialState: StateType = {
  drawers: {},
};

const { actions, reducer } = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setDrawer: (s, a: { payload: SetDrawerType }) => {
      if (!(a.payload.id in s.drawers))
        s.drawers[a.payload.id] = { visible: false };

      s.drawers[a.payload.id].visible = a.payload.visible;
      s.drawers[a.payload.id].data = a.payload.data;
    },
  },
});

export const commonActions = {
  setDrawer: actions.setDrawer,
};

export default reducer;
