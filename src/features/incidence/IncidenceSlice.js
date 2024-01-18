import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import incidenceService from "./incidenceService";

const initialState = {
  incidence: "",
  incidences: [],
  message: "",
  status: "idle",
  newIncidences: [],
};

export const incidenceSlice = createSlice({
  name: "incidence",
  initialState,
  reducers: {
    reset: (state) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createManualIncidence.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createManualIncidence.fulfilled, (state, action) => {
        console.log(action.payload);
        state.incidence = action.payload.incidence;
        state.status = "succeeded";
        state.message = action.payload.message;
      })
      .addCase(createManualIncidence.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload.message;
      })
      .addCase(getAllIncidences.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllIncidences.fulfilled, (state, action) => {
        state.incidence = action.payload.incidence;
        state.status = "succeeded";
        state.message = action.payload.message;
      })
      .addCase(getAllIncidences.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getIncidenceById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getIncidenceById.fulfilled, (state, action) => {
        state.incidence = action.payload.incidence;
        state.status = "succeeded";
        state.message = action.payload.message;
      })
      .addCase(getIncidenceById.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload.message;
      })
      .addCase(updateIncidence.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateIncidence.fulfilled, (state, action) => {
        state.incidence = action.payload.incidence;
        state.status = "succeeded";
        state.message = action.payload.message;
      })
      .addCase(updateIncidence.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload.message;
      })
      .addCase(deleteIncidence.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteIncidence.fulfilled, (state, action) => {
        state.incidence = action.payload.incidence;
        state.status = "succeeded";
        state.message = action.payload.message;
      })
      .addCase(deleteIncidence.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload.message;
      })
      .addCase(fetchAndCreateIncidences.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAndCreateIncidences.fulfilled, (state, action) => {
        console.log(action.payload)
        state.newIncidences = action.payload;
        state.status = "succeeded";
        state.message = action.payload.message;
      })
      .addCase(fetchAndCreateIncidences.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload.message;
      })
  },
});

export const { reset } = incidenceSlice.actions;

export const fetchAndCreateIncidences = createAsyncThunk(
  "incidence/fetchAndCreateIncidences",
  async (_, thunkAPI) => {
    try {
      return await incidenceService.fetchAndCreateIncidences();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const createManualIncidence = createAsyncThunk(
  "incidence/createManualIncidence",
  async (data, thunkAPI) => {
    try {
      return await incidenceService.createManualIncidence(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getAllIncidences = createAsyncThunk(
  "incidence/getAllIncidences",
  async (buildingId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/incidences?buildingId=${buildingId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getIncidenceById = createAsyncThunk(
  "incidence/getIncidenceById",
  async (data, thunkAPI) => {
    try {
      return await incidenceService.getIncidenceById(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateIncidence = createAsyncThunk(
  "incidence/updateIncidence",
  async (data, thunkAPI) => {
    try {
      return await incidenceService.updateIncidence(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteIncidence = createAsyncThunk(
  "incidence/deleteIncidence",
  async (data, thunkAPI) => {
    try {
      return await incidenceService.deleteIncidence(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export default incidenceSlice.reducer;
