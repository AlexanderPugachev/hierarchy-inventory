import { createAsyncThunk } from '@reduxjs/toolkit';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { CollectionDataType, PlaceType } from '../slices/placesSlice';

export const getPlaces = createAsyncThunk(
  'places/getList',
  async () => {
    const responseData = await firebase.firestore()
      .collection('places').get()
      .then(response => response.docs
        .map(x => ({
          id: x.id,
          name: x.data().name,
          parts: x.data().parts,
        })),
      );

    return {
      structure: createStructure(responseData) as PlaceType[],
      collection: responseData as CollectionDataType[],
    };
  },
);

const createStructure = (data: CollectionDataType[]): Array<PlaceType | undefined> => {
  const childrenId: string[] = [];
  data.forEach(({ parts }) => parts && childrenId.push(...parts));

  const getChildren = (parts: string[]): Array<PlaceType> => parts.map((item) => {
    const child = data.find(({ id }) => id === item);
    return ({
      id: child?.id,
      name: child?.name,
      children: child?.parts ? getChildren(child.parts) : undefined,
    }) as PlaceType;
  });

  return data
    .filter(item => !childrenId.includes(item.id))
    .map(({ id, name, parts }) => ({
      id, name,
      children: parts ? getChildren(parts) : undefined,
    }));
};