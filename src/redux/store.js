import { configureStore } from "@reduxjs/toolkit";
// import masterSlice from './slices/master/masterSlice'
const store = configureStore({
  reducer: {
    // master:masterSlice
  },
});

export default store;
