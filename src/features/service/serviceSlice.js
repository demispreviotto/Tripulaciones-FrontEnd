import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import serviceService from "./serviceService";

const service = JSON.parse(localStorage.getItem("service"));

const initialState = {
  service: service || null,
  services: [],
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
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.services = action.payload;
        state.status = "succeeded";
        state.message = action.payload.message;
      })
      .addCase(getAll.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAll.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload.message;
      })
      .addCase(update.fulfilled, (state, action) => {
        state.services = action.payload;
        state.status = "succeeded";
        state.message = action.payload.message;
      })
      .addCase(update.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(update.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload.message;
      });
  },
});

export const create = createAsyncThunk(
  "service/create",
  async (data, thunkAPI) => {
    try {
      return await serviceService.create(data);
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getAll = createAsyncThunk("service/getAll", async () => {
  try {
    return await serviceService.getAll();
  } catch (error) {
    console.error(error);
  }
});

export const update = createAsyncThunk("service/update", async () => {
  try {
    return await serviceService.update(data);
  } catch (error) {
    console.error(Error);
  }
});

export default serviceSlice.reducer;
