import { createSlice } from '@reduxjs/toolkit';
import { DrawerType, SetDrawerType } from '../types';

export enum DrawersId {
  'AddInventory',
  'AddPlace',
}

type StateType = {
  drawers: { [key: string]: DrawerType };
};

const initialState: StateType = {
  drawers: {},
};

const { actions, reducer } = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setDrawer: (s, a: { payload: SetDrawerType }) => {
      if (!s.drawers?.[a.payload.id])
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
