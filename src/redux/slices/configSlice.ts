import { createSlice } from '@reduxjs/toolkit';
import { initFirebase } from '../thunks/configThunks';

const initialState = {
  firebaseLoaded: false,
};

const { reducer } = createSlice({
  name: 'config',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(initFirebase.fulfilled, s => {
      s.firebaseLoaded = true;
    });
  },
});

export const configActions = {};

export default reducer;