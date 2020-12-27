import { configureStore } from '@reduxjs/toolkit';

import configReducer from './slices/configSlice';
import inventoryReducer from './slices/inventorySlice';
import placesReducer from './slices/placesSlice';

export const store = configureStore({
  reducer: {
    config: configReducer,
    inventory: inventoryReducer,
    places: placesReducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware()]
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
