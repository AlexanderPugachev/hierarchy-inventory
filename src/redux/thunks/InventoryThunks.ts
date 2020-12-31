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
          name: x.data().name,
          placeId: x.data().placeId,
          count: x.data().count,
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
  async ({ name, count, place }: AddInventoryFormType, API) => {
    firebase.firestore().collection('inventory').doc().set({
      name,
      count,
      placeId: place,
    }).then(() => {
      API.dispatch(getInventory());
    });
  },
);

export const deleteInventory = createAsyncThunk(
  'inventory/deleteItem',
  async ({ id }: ({ id: string }), API) => {
    firebase.firestore().collection('inventory').doc(id).delete().then(() => {
      API.dispatch(getInventory());
    });
  },
);