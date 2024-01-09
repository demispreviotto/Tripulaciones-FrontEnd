import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem('user'));
const token = JSON.parse(localStorage.getItem('token'));

const initialState = {
    user: user || null,
    token: token || null,
    message: '',
    stage: 'idle',
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            return initialState;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(register.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.message = action.payload.message
            })
            .addCase(register.rejected, (state, action) => {
                state.status = 'failed';
                state.message = action.payload
            })
            .addCase(login.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.status = 'succeeded';
                state.message = action.payload.message;
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.message = action.payload;
            })
            .addCase(getProfile.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.userRecipes = action.payload.recipeIds;
                state.status = 'succeeded';
                state.message = action.payload.message;
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.status = 'failed';
                state.message = action.payload;
            })

    }
})

export const register = createAsyncThunk('auth/register', async (data, thunkAPI) => {
    try {
        return await authService.register(data)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message)
    }
})
export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
    try {
        return await authService.login(data);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
})
export const getProfile = createAsyncThunk('auth/getLoggedUser', async (thunkAPI) => {
    try {
        return await authService.getLoggedUser();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
})
export const logout = createAsyncThunk('auth/login', async (data) => {
    try {
        return await authService.logout();
    } catch (error) {
        console.error(error);
    }
})

export const { reset } = authSlice.actions;
export default authSlice.reducer;