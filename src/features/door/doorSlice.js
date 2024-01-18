import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import doorService from "./doorService";

const door = "";
const doors = [];

const initialState = {
  door: door || "",
  doors: doors || [],
  message: "",
  stage: "idle",
};
export const doorSlice = createSlice({
  name: "door",
  initialState,
  reducers: {
    reset: (state) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createDoor.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createDoor.fulfilled, (state, action) => {
        state.door = action.payload.door;
        state.status = "succeeded";
        state.message = action.payload.message;
      })
      .addCase(createDoor.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload.message;
      })
      .addCase(getAllDoors.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllDoors.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.doors = action.payload;
        state.status = "succeeded";
        state.message = action.payload.message;
      })
      .addCase(getAllDoors.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload.message;
      })
      .addCase(getDoorById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDoorById.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.door = action.payload;
        state.status = "succeeded";
        state.message = action.payload.message;
      })
      .addCase(getDoorById.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload.message;
      })
      .addCase(updateDoorById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateDoorById.fulfilled, (state, action) => {
        state.door = action.payload.door;
        state.status = "succeeded";
        state.message = action.payload.message;
      })
      .addCase(updateDoorById.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload.message;
      })
      .addCase(deleteDoorById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteDoorById.fulfilled, (state, action) => {
        state.door = action.payload.door;
        state.status = "succeeded";
        state.message = action.payload.message;
      })
      .addCase(deleteDoorById.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload.message;
      });
  },
});
export const createDoor = createAsyncThunk(
  "door/createDoor",
  async (data, thunkAPI) => {
    try {
      return await doorService.createDoor(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getAllDoors = createAsyncThunk(
  "door/getAllDoors",
  async (_, thunkAPI) => {
    try {
      return await doorService.getAllDoors();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getDoorById = createAsyncThunk(
  "door/getDoorById",
  async (data, thunkAPI) => {
    try {
      return await doorService.getDoorById(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const updateDoorById = createAsyncThunk(
  "door/updateDoorById",
  async (data, thunkAPI) => {
    try {
      return await doorService.updateDoorById(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const deleteDoorById = createAsyncThunk(
  "door/deleteDoorById",
  async (data, thunkAPI) => {
    try {
      return await doorService.deleteDoorById(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const { reset } = doorSlice.actions;
export default doorSlice.reducer;
