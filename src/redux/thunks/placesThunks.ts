import { createAsyncThunk } from '@reduxjs/toolkit';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { CollectionDataType, PlaceTypes } from '../slices/placesSlice';

export const getPlaces = createAsyncThunk(
  'places/getList',
  async () => {
    const responseData = await firebase.firestore().collection('places').get()
      .then(response => response.docs
        .map(x => ({
          id: x.id,
          data: x.data(),
          parts: x.data().parts && x.data().parts.map((part: { id: string; }) => part.id),
        }))
        .map(({ id, data, parts }) => ({
          id,
          name: data.name,
          parts,
        })),
      );

    return {
      structure: createStructure(responseData) as PlaceTypes[],
      collection: responseData as CollectionDataType[]
    };
  },
);

const createStructure = (data: CollectionDataType[]): Array<PlaceTypes | undefined> => {
  const childrenId: string[] = [];
  data.forEach(({ parts }) => parts && childrenId.push(...parts));

  const getChildren = (parts: string[]): Array<PlaceTypes> => parts.map((item) => {
    const child = data.find(({ id }) => id === item);
    return ({
      id: child?.id,
      name: child?.name,
      children: child?.parts ? getChildren(child.parts) : undefined,
    }) as PlaceTypes;
  });

  return data
    .filter(item => !childrenId.includes(item.id))
    .map(({ id, name, parts }) => ({
      id, name,
      children: parts ? getChildren(parts) : undefined,
    }));
};