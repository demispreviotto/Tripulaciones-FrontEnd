import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ownerService from "./ownerService";

const initialState = {
  owner: null,
  owners: [],
  message: "",
  status: "idle",
};

export const createOwner = createAsyncThunk(
  "owner/createOwner",
  async (data, thunkAPI) => {
    try {
      return await ownerService.createOwner(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getAllOwners = createAsyncThunk(
  "owner/getAllOwners",
  async (_, thunkAPI) => {
    try {
      return await ownerService.getAllOwners();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteOwnerById = createAsyncThunk(
  "owner/deleteOwnerById",
  async (id, thunkAPI) => {
    try {
      return await ownerService.deleteOwnerById(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateOwnerById = createAsyncThunk(
  "owner/updateOwnerById",
  async (data, thunkAPI) => {
    try {
      return await ownerService.updateOwnerById(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const ownerSlice = createSlice({
  name: "owner",
  initialState,
  reducers: {
    reset: (state) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOwner.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createOwner.fulfilled, (state, action) => {
        state.owner = action.payload.owner;
        state.status = "succeeded";
        state.message = action.payload.message;
      })
      .addCase(createOwner.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload.message;
      })
      .addCase(getAllOwners.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllOwners.fulfilled, (state, action) => {
        state.owners = action.payload;
        state.status = "succeeded";
        state.message = action.payload.message;
      })
      .addCase(getAllOwners.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload.message;
      })
      .addCase(deleteOwnerById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteOwnerById.fulfilled, (state, action) => {
        state.owner = action.payload.owner;
        state.status = "succeeded";
        state.message = action.payload.message;
      })
      .addCase(deleteOwnerById.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload.message;
      })
      .addCase(updateOwnerById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateOwnerById.fulfilled, (state, action) => {
        state.owner = action.payload.owner;
        state.status = "succeeded";
        state.message = action.payload.message;
      })
      .addCase(updateOwnerById.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload.message;
      });
  },
});

export const { reset } = ownerSlice.actions;
export default ownerSlice.reducer;
