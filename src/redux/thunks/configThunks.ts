import { createAsyncThunk } from '@reduxjs/toolkit';
import firebase from 'firebase/app';

export const initFirebase = createAsyncThunk(
  'config/initFirebase',
  async () => {
    const firebaseConfig = {
      apiKey: "AIzaSyBrMkcXK7s4y3AFxZNy_hFPiv0VGrL1EPI",
      authDomain: "hierarchy-2cc18.firebaseapp.com",
      projectId: "hierarchy-2cc18",
      storageBucket: "hierarchy-2cc18.appspot.com",
      messagingSenderId: "819311790917",
      appId: "1:819311790917:web:0898457ddde70186d1cc2c"
    };
    firebase.initializeApp(firebaseConfig);
  },
);
