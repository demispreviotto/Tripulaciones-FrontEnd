import { configureStore } from "@reduxjs/toolkit";
import auth from "../features/auth/authSlice";
import building from "../features/building/buildingSlice";
import service from "../features/services/serviceSlice";

export const store = configureStore({
  reducer: {
    auth,
    building,
    service,
  },
});
