import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Login User action
export const loginUser = createAsyncThunk(
  "auth/login",
  async (userCredentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://take-home-test-api.nutech-integrasi.com/login",
        userCredentials
      );
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isLoading: false,
    errorMessage: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.errorMessage = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.errorMessage =
          action.payload || "Login failed. Please try again.";
      });
  },
});

export default userSlice.reducer;
