import { createSlice } from '@reduxjs/toolkit';
import { getPlaces } from '../thunks/placesThunks';
import {
  PlacesHash,
  PlaceType,
  SelectedPlaceType,
} from '../types';

type stateTypes = {
  list: PlaceType[];
  collection: PlacesHash;
  selected: SelectedPlaceType;
};

const initialState: stateTypes = {
  list: [],
  collection: {},
  selected: {
    id: null,
    name: null,
  },
};

const { actions, reducer } = createSlice({
  name: 'places',
  initialState,
  reducers: {
    setSelected: (s, a) => {
      const current = s.collection[a.payload.id];

      s.selected = a.payload;
      s.selected.isRoom = !current?.parts?.length;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPlaces.fulfilled, (s, a) => {
      s.list = a.payload.structure;
      s.collection = a.payload.collection;
    });
  },
});

export const placesActions = {
  setSelected: actions.setSelected,
};

export default reducer;
