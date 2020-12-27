import { createAsyncThunk } from '@reduxjs/toolkit';
import { InventoryType } from '../slices/inventorySlice';
import firebase from 'firebase/app';
import 'firebase/firestore';

export const getInventory = createAsyncThunk(
  'inventory/getList',
  async () => {
    const data = await firebase.firestore().collection('inventory').get()
      .then(response => response.docs
        .map(x => ({
          id: x.id,
          data: x.data(),
          placeId: x.data().place?.id,
        }))
        .map(item => ({
          id: item.id,
          name: item.data.name,
          count: item.data.count,
          placeId: item.placeId,
        })),
      );

    return data as InventoryType[];
  },
);

type AddInventoryFormType = {
  name: string
  count: string
  place: string
}

export const addInventory = createAsyncThunk(
  'inventory/addItem',
  async ({ name, count, place }: AddInventoryFormType, API)  => {
    firebase.firestore().collection('inventory').doc().set({
      name,
      count,
      place: firebase.firestore().collection('places').doc(place),
    }).then(() => {
      console.info('Done');
    });

    API.dispatch(getInventory());
  },
);

export const deleteInventory = createAsyncThunk(
  'inventory/deleteItem',
  async ({ id }: ({ id: string }), API)  => {
    firebase.firestore().collection('inventory').doc(id).delete().then(() => {
      console.info('Done');
  });

    API.dispatch(getInventory());
  },
);