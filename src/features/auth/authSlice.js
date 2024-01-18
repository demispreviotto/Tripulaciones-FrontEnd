import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem("user"));
const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
  user: user || null,
  token: token || null,
  message: "",
  stage: "idle",
  profile: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      return {
        ...initialState,
        user: null,
        token: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.message = action.payload.message;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload.message;
      })
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.status = "succeeded";
        state.message = action.payload.message;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload;
      })
      .addCase(getLoggedUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getLoggedUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.status = "succeeded";
        state.message = action.payload.message;
      })
      .addCase(getLoggedUser.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload;
      })
      .addCase(update.fulfilled, (state, action) => {
        state.profile = action.payload.profile;
        state.status = "succeeded";
        state.message = action.payload.message;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(update.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(update.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload;
      })
      .addCase(logout.fulfilled, (state, action) => {
        return {
          ...state,
          profile: null,
          user: null,
          token: null,
          status: "succeeded",
          message: action.payload.message,
        };
      })
      .addCase(logout.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload;
      });
  },
});

export const register = createAsyncThunk(
  "auth/register",
  async (data, thunkAPI) => {
    try {
      return await authService.register(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const login = createAsyncThunk("auth/login", async (data, thunkAPI) => {
  try {
    return await authService.login(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});
export const getLoggedUser = createAsyncThunk(
  "auth/getLoggedUser",
  async (thunkAPI) => {
    try {
      return await authService.getLoggedUser();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const logout = createAsyncThunk("auth/logout", async (data) => {
  try {
    return await authService.logout();
  } catch (error) {
    console.error(error);
  }
});
export const update = createAsyncThunk("auth/update", async (data) => {
  try {
    return await authService.update(data);
  } catch (error) {
    console.error(error);
  }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
