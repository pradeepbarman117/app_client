<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../redux/slices/auth/authSlice';
const store = configureStore({
    reducer: {
        auth: authSlice,
    },
});

export default store;

=======
import { configureStore } from "@reduxjs/toolkit";
// import masterSlice from './slices/master/masterSlice'
const store = configureStore({
  reducer: {
    // master:masterSlice
  },
});

export default store;
>>>>>>> fe76fd557da426803569ab39d8a9e9e2d64d0c80
