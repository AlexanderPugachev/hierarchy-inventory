import { createAsyncThunk } from '@reduxjs/toolkit';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { commonActions, DrawersId } from '../slices/commonSlice';
import {
  AddInventoryType,
  InventoryHash,
  InventoryType,
} from '../types';
import { createHashTable } from '../../utils';

export const getInventory = createAsyncThunk('inventory/getList', async () => {
  const data = await firebase
    .firestore()
    .collection('inventory')
    .get()
    .then((response) =>
      response.docs.map((x) => ({
        id: x.id,
        name: x.data().name,
        placeId: x.data().placeId,
        count: x.data().count,
      })),
    );

  return {
    list: data as InventoryType[],
    collection: createHashTable(data) as InventoryHash,
  };
});

export const addInventory = createAsyncThunk(
  'inventory/addItem',
  async ({ name, count, placeId }: AddInventoryType, API) => {
    firebase
      .firestore()
      .collection('inventory')
      .doc()
      .set({
        name,
        count,
        placeId,
      })
      .then(() => {
        API.dispatch(getInventory());
        API.dispatch(
          commonActions.setDrawer({
            visible: false,
            id: DrawersId.AddInventory,
          }),
        );
      });
  },
);

export const deleteInventory = createAsyncThunk(
  'inventory/deleteItem',
  async ({ id }: { id: string }, API) => {
    firebase
      .firestore()
      .collection('inventory')
      .doc(id)
      .delete()
      .then(() => {
        API.dispatch(getInventory());
      });
  },
);

export const updateInventory = createAsyncThunk(
  'inventory/updateItem',
  async ({ id, name, count, placeId }: InventoryType, API) => {
    firebase
      .firestore()
      .collection('inventory')
      .doc(id)
      .set({
        name,
        count,
        placeId,
      })
      .then(() => {
        API.dispatch(getInventory());
        API.dispatch(
          commonActions.setDrawer({
            visible: false,
            id: DrawersId.AddInventory,
          }),
        );
      });
  },
);
