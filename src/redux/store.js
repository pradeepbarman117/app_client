import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../redux/slices/auth/authSlice';
const store = configureStore({
    reducer: {
        auth: authSlice,
    },
});

export default store;

