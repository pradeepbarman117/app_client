import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { masterServices } from "../../../services/master/masterServices";
import Cookies from "js-cookie";

// Create async thunk with improved error handling
export const fetchMasterData = createAsyncThunk(
  "master/fetchMasterData",
  async (_, { rejectWithValue }) => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        return rejectWithValue("No authentication token found");
      }

      const response = await masterServices.get(token);
      return response.data;
    } catch (err) {
      // More granular error handling
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "An unexpected error occurred";
      return rejectWithValue(errorMessage);
    }
  }
);

// Initial state
const initialState = {
  masters: [],
  loading: false,
  error: null,
};

// Create slice with improved state management
const masterSlice = createSlice({
  name: "master",
  initialState,
  reducers: {
    // Optional: Method to clear data if needed
    clearMasterData: (state) => {
      state.masters = [];
      state.error = null;
    },
    addMasterAction: (state, action) => {
      state.masters = {...state.masters,data:[...state.masters.data,action.payload]}
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMasterData.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset error on new request
      })
      .addCase(fetchMasterData.fulfilled, (state, action) => {
        state.loading = false;
        state.masters = action.payload;
        state.error = null;
      })
      .addCase(fetchMasterData.rejected, (state, action) => {
        state.loading = false;
        state.masters = []; // Clear data on error
        state.error = action.payload || "An unknown error occurred";
      });
  },
});

// Export actions and reducer
export const { clearMasterData, addMasterAction, updateMastersAction } =
  masterSlice.actions;
export default masterSlice.reducer;
