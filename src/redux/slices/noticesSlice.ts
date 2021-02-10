import { createSlice } from '@reduxjs/toolkit';
import { NoticeType } from '../types';
import { store } from '../store';

type stateTypes = {
  data: { [id: string]: NoticeType }
};

const initialState: stateTypes = {
  data: {},
};

const { actions, reducer } = createSlice({
  name: 'notices',
  initialState,
  reducers: {
    addNotice: (s, a) => {
      const timer = setTimeout(() => {
        store.dispatch(noticesActions.removeNotice(a.payload.id));
      }, a.payload.delay);

      s.data[a.payload.id] = { ...a.payload, timer };
    },
    removeNotice: (s, a) => {
      clearTimeout(s.data[a.payload].timer);
      delete s.data[a.payload];
    },
  },
});

export const noticesActions = {
  addNotice: actions.addNotice,
  removeNotice: actions.removeNotice,
};

export default reducer;
