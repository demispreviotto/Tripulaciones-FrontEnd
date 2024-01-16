import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import todoService from "./todoService";

const initialState = {
    todos: [],
    todo: null,
    message: "",
    status: "idle",
};

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        reset: (state) => {
            return initialState;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createTodo.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.message = action.payload.message;
            })
            .addCase(getAllTodos.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.todos = action.payload;
            })
            .addCase(getTodoById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.todo = action.payload;
            })
            .addCase(updateTodo.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.message = action.payload.message;
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.message = action.payload.message;
            })
        // .addMatcher(
        //     (action) =>
        //         action.type.endsWith("/pending") || action.type.endsWith("/rejected"),
        //     (state) => {
        //         state.status = "loading";
        //     }
        // );
    },
});

export const createTodo = createAsyncThunk(
    "todos/createTodo",
    async (data, thunkAPI) => {
        try {
            return await todoService.createTodo(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getAllTodos = createAsyncThunk(
    "todos/getAllTodos",
    async (_, thunkAPI) => {
        try {
            return await todoService.getAllTodos();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getTodoById = createAsyncThunk(
    "todos/getTodoById",
    async (id, thunkAPI) => {
        try {
            return await todoService.getTodoById(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const updateTodo = createAsyncThunk(
    "todos/updateTodo",
    async ({ id, data }, thunkAPI) => {
        try {
            return await todoService.updateTodo(id, data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const deleteTodo = createAsyncThunk(
    "todos/deleteTodo",
    async (id, thunkAPI) => {
        try {
            return await todoService.deleteTodo(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const { reset } = todoSlice.actions;
export default todoSlice.reducer;
