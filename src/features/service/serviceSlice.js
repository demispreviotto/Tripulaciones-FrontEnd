import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import serviceService from "./serviceService";

const service = JSON.parse(localStorage.getItem("service"));

const initialState = {
  service: service || null,
  message: "",
  status: "idle",
};

export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    reset: (state) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(create.fulfilled, (state, action) => {
        state.service = action.payload.service;
        state.status = "succeeded";
        state.message = action.payload.message;
      })
      .addCase(create.pending, (state) => {
        state.status = "loading";
      })
      .addCase(create.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload.message;
      });
  },
});

export const create = createAsyncThunk("service/create", async (data, thunkAPI) => {
  try {
    return await serviceService.create(data);
  } catch (error) {
    console.error(error);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export default serviceSlice.reducer;
