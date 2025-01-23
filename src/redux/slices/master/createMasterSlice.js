import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { masterServices } from "../../../services/master/masterServices";
import Cookies from "js-cookie";

// Create async thunk for master creation
export const createMasterData = createAsyncThunk(
  "master/createMasterData",
  async (credentials, { rejectWithValue }) => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        return rejectWithValue("No authentication token found");
      }

      const response = await masterServices.create(credentials, token);
      return response.data;
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "An unexpected error occurred during master creation";
      return rejectWithValue(errorMessage);
    }
  }
);

// Initial state for create master
const initialState = {
  createdMaster: null,
  loading: false,
  error: null,
};

// Create slice for master creation
const createMasterSlice = createSlice({
  name: "createMaster",
  initialState,
  reducers: {
    resetCreateMasterState: (state) => {
      state.createdMaster = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createMasterData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createMasterData.fulfilled, (state, action) => {
        state.loading = false;
        state.createdMaster = action.payload;
        state.error = null;
      })
      .addCase(createMasterData.rejected, (state, action) => {
        state.loading = false;
        state.createdMaster = null;
        state.error = action.payload || "Master creation failed";
      });
  },
});

export const { resetCreateMasterState } = createMasterSlice.actions;
export default createMasterSlice.reducer;