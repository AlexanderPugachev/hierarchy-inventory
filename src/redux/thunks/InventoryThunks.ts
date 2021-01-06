import { createAsyncThunk } from '@reduxjs/toolkit';
import { InventoryType } from '../slices/inventorySlice';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { commonActions, DrawersId } from '../slices/commonSlice';

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

type AddInventoryType = Omit<InventoryType, 'id'>

export const addInventory = createAsyncThunk(
  'inventory/addItem',
  async ({ name, count, placeId }: AddInventoryType, API) => {
    firebase.firestore().collection('inventory').doc().set({
      name,
      count,
      placeId,
    }).then(() => {
      API.dispatch(getInventory());
      API.dispatch(commonActions.setDrawer({
        visible: false,
        id: DrawersId.AddInventory,
      }));
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

export const updateInventory = createAsyncThunk(
  'inventory/updateInventory',
  async ({ id, name, count, placeId }: InventoryType, API) => {
    firebase.firestore().collection('inventory').doc(id).set({
      name,
      count,
      placeId,
    }).then(() => {
      API.dispatch(getInventory());
      API.dispatch(commonActions.setDrawer({
        visible: false,
        id: DrawersId.AddInventory,
      }));
    });
  },
);