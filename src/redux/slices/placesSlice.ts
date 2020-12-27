import { createSlice } from "@reduxjs/toolkit";
import { getPlaces } from '../thunks/placesThunks';

export type PlaceTypes = {
  id: string,
  name: string,
  children: PlaceTypes[] | undefined
};

export type CollectionDataType = {
  id: string,
  name: string,
  parts: string[]
}

export type SelectedPlaceType = {
  id: string | null,
  name: string | null,
  isRoom?: boolean
}

type stateTypes = {
  list: PlaceTypes[],
  collection: CollectionDataType[],
  selected: SelectedPlaceType
}

const initialState: stateTypes = {
  list: [],
  collection: [],
  selected: {
    id: null,
    name: null
  }
};

const { actions, reducer } = createSlice({
  name: 'places',
  initialState,
  reducers: {
    setSelected: (s, a) => {
      const current = s.collection.find(item => item.id === a.payload.id);
      
      s.selected = a.payload;
      s.selected.isRoom = !current?.parts?.length;
    }
  },
  extraReducers: builder => {
    builder.addCase(getPlaces.fulfilled, (s, a) => {
      s.list = a.payload.structure;
      s.collection = a.payload.collection;
    });
  }
});

export const placesActions = {
  setSelected: actions.setSelected
};

export default reducer;