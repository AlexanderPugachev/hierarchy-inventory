import { configureStore } from '@reduxjs/toolkit';

import commonReducer from './slices/commonSlice';
import configReducer from './slices/configSlice';
import inventoryReducer from './slices/inventorySlice';
import noticesReducer from './slices/noticesSlice';
import placesReducer from './slices/placesSlice';

export const store = configureStore({
  reducer: {
    common: commonReducer,
    config: configReducer,
    inventory: inventoryReducer,
    notices: noticesReducer,
    places: placesReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
