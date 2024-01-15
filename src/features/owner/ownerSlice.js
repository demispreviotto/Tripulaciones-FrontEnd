import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ownerService from "./ownserService";

const owner = JSON.parse(localStorage.getItem("owner"));

const initialState = {
  owner: owner || null,
  owners: [],
  message: "",
  status: "idle",
};

export const ownerSlice = createSlice({
  name: "owner",
  initialState,
  reducers: {
    reset: (state) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(create.fulfilled, (state, action) => {
        state.service = action.payload.owner;
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

export const create = createAsyncThunk(
  "owner/create",
  async (data, thunkAPI) => {
    try {
      return await ownerService.create(data);
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export default ownerSlice.reducer;
