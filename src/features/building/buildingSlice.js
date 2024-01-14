import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import buildingService from "./buildingService";

const building = JSON.parse(localStorage.getItem('building'));
const buildings = JSON.parse(localStorage.getItem('buildings'));


const initialState = {
    building: building || null,
    buildings: buildings || null,
    message: '',
    stage: 'idle',
}
export const buildingSlice = createSlice({
    name: "building",
    initialState,
    reducers: {
        reset: (state) => {
            return initialState;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createBuilding.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(createBuilding.fulfilled, (state, action) => {
                state.building = action.payload.building
                state.status = 'succeeded';
                state.message = action.payload.message
            })
            .addCase(createBuilding.rejected, (state, action) => {
                state.status = 'failed';
                // console.log(action.payload.message)
                state.message = action.payload.message
            })
            .addCase(getAllBuildings.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllBuildings.fulfilled, (state, action) => {
                state.building = action.payload.building;
                state.status = 'succeeded';
                state.message = action.payload.message;
            })
            .addCase(getAllBuildings.rejected, (state, action) => {
                state.status = 'failed';
                state.message = action.payload.message;
            })
            .addCase(getBuildingById.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getBuildingById.fulfilled, (state, action) => {
                state.building = action.payload.building
                state.status = 'succeeded';
                state.message = action.payload.message
            })
            .addCase(getBuildingById.rejected, (state, action) => {
                state.status = 'failed';
                // console.log(action.payload.message)
                state.message = action.payload.message
            })
            .addCase(updateBuildingById.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateBuildingById.fulfilled, (state, action) => {
                state.building = action.payload.building;
                state.status = 'succeeded';
                state.message = action.payload.message;
            })
            .addCase(updateBuildingById.rejected, (state, action) => {
                state.status = 'failed';
                state.message = action.payload.message;
            })
            .addCase(deleteBuildingById.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteBuildingById.fulfilled, (state, action) => {
                state.building = action.payload.building;
                state.status = 'succeeded';
                state.message = action.payload.message;
            })
            .addCase(deleteBuildingById.rejected, (state, action) => {
                state.status = 'failed';
                state.message = action.payload.message;
            })
    }
})
export const createBuilding = createAsyncThunk('building/createBuilding', async (data, thunkAPI) => {
    try {
        return await buildingService.createBuilding(data)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
});
export const getAllBuildings = createAsyncThunk('building/getAllBuildings', async (_, thunkAPI) => {
    try {
        return await buildingService.getAllBuildings();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});
export const getBuildingById = createAsyncThunk('building/getBuildingById', async (data, thunkAPI) => {
    try {
        return await buildingService.getBuildingById(data)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
});
export const updateBuildingById = createAsyncThunk('building/updateBuildingById', async (data, thunkAPI) => {
    try {
        return await buildingService.updateBuildingById(data);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});
export const deleteBuildingById = createAsyncThunk('building/deleteBuildingById', async (data, thunkAPI) => {
    try {
        return await buildingService.deleteBuildingById(data);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});


export const { reset } = buildingSlice.actions;
export default buildingSlice.reducer;