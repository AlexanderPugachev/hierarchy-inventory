import { createAsyncThunk } from '@reduxjs/toolkit';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { createHashTable, createStructure } from '../../utils';
import { PlacesHash, PlaceType } from '../types';

export const getPlaces = createAsyncThunk('places/getList', async () => {
  const responseData = await firebase
    .firestore()
    .collection('places')
    .get()
    .then((response) =>
      response.docs.map((x) => ({
        id: x.id,
        name: x.data().name,
        parts: x.data().parts,
      })),
    );

  return {
    structure: createStructure(responseData) as PlaceType[],
    collection: createHashTable(responseData, 'id') as PlacesHash,
  };
});

