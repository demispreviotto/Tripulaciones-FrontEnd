import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import incidenceService from "./incidenceService";

const incidence = '';

const initialState = {
    incidence: incidence || null,
    message: '',
    status: 'idle',
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
            .addCase(createIncidence.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createIncidence.fulfilled, (state, action) => {
                state.incidence = action.payload.incidence;
                state.status = 'succeeded';
                state.message = action.payload.message;
            })
            .addCase(createIncidence.rejected, (state, action) => {
                state.status = 'failed';
                state.message = action.payload.message;
            })
            .addCase(createManualIncidence.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createManualIncidence.fulfilled, (state, action) => {
                console.log(action.payload)
                state.incidence = action.payload.incidence;
                state.status = 'succeeded';
                state.message = action.payload.message;
            })
            .addCase(createManualIncidence.rejected, (state, action) => {
                state.status = 'failed';
                state.message = action.payload.message;
            })
            .addCase(getAllIncidences.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllIncidences.fulfilled, (state, action) => {
                state.incidence = action.payload.incidence;
                state.status = 'succeeded';
                state.message = action.payload.message;
            })
            .addCase(getAllIncidences.rejected, (state, action) => {
                state.status = 'failed';
                state.message = action.payload.message;
            })
            .addCase(getIncidenceById.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getIncidenceById.fulfilled, (state, action) => {
                state.incidence = action.payload.incidence;
                state.status = 'succeeded';
                state.message = action.payload.message;
            })
            .addCase(getIncidenceById.rejected, (state, action) => {
                state.status = 'failed';
                state.message = action.payload.message;
            })
            .addCase(updateIncidence.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateIncidence.fulfilled, (state, action) => {
                state.incidence = action.payload.incidence;
                state.status = 'succeeded';
                state.message = action.payload.message;
            })
            .addCase(updateIncidence.rejected, (state, action) => {
                state.status = 'failed';
                state.message = action.payload.message;
            })
            .addCase(deleteIncidence.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteIncidence.fulfilled, (state, action) => {
                state.incidence = action.payload.incidence;
                state.status = 'succeeded';
                state.message = action.payload.message;
            })
            .addCase(deleteIncidence.rejected, (state, action) => {
                state.status = 'failed';
                state.message = action.payload.message;
            });
    },
});

export const {
    reset,
} = incidenceSlice.actions;

export const createIncidence = createAsyncThunk('incidence/createIncidence', async (data, thunkAPI) => {
    try {
        return await incidenceService.createIncidence(data);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const createManualIncidence = createAsyncThunk(
    'incidence/createManualIncidence',
    async (data, thunkAPI) => {
        try {
            return await incidenceService.createManualIncidence(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
export const getAllIncidences = createAsyncThunk('incidence/getAllIncidences', async (_, thunkAPI) => {
    try {
        return await incidenceService.getAllIncidences();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const getIncidenceById = createAsyncThunk('incidence/getIncidenceById', async (data, thunkAPI) => {
    try {
        return await incidenceService.getIncidenceById(data);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const updateIncidence = createAsyncThunk('incidence/updateIncidence', async (data, thunkAPI) => {
    try {
        return await incidenceService.updateIncidence(data);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const deleteIncidence = createAsyncThunk('incidence/deleteIncidence', async (data, thunkAPI) => {
    try {
        return await incidenceService.deleteIncidence(data);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export default incidenceSlice.reducer;

