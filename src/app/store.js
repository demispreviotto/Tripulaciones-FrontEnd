import { configureStore } from "@reduxjs/toolkit";
import auth from '../features/auth/authSlice'
import building from '../features/building/buildingSlice'

export const store = configureStore({
    reducer: {
        auth,
        building,
    },
})