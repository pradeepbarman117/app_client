import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { loginService } from '../../../services/auth/authServices';
import axios from 'axios';

// Thunk for login
export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
    try {
        const response = await loginService.login(credentials);
        const { user, token } = response.data;
        Cookies.set('token', token, { secure: true, });
        Cookies.set('user', JSON.stringify(user), { secure: true,});

        return { user, token };
    } catch (error) {
        const message = error.response?.data?.message || 'Something went wrong. Please try again.';
        return rejectWithValue(message);
    }
});

// Thunk for session verification
export const verifySession = createAsyncThunk('auth/verifySession', async (_, { rejectWithValue }) => {
    const token = Cookies.get('token'); // Retrieve token from cookies
    try {
        if (!token) throw new Error('No token found.');

        const response = await axios.get('http://localhost:8080/api/protected', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data; // { user } from the server
    } catch (error) {
        const message = error.response?.data?.message || error.message || 'Session verification failed';
        return rejectWithValue(message);
    }
});

// Slice for auth
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: Cookies.get('user') ? JSON.parse(Cookies.get('user')) : true,
        token: Cookies.get('token') || null,
        loading: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;

            // Clear cookies
            Cookies.remove('token');
            Cookies.remove('user');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(verifySession.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(verifySession.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
            })
            .addCase(verifySession.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                state.token = null;

                // Clear cookies on session verification failure
                Cookies.remove('token');
                Cookies.remove('user');
                state.error = action.payload;
                console.log('rejection');
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;