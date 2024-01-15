import { configureStore } from "@reduxjs/toolkit";
import auth from "../features/auth/authSlice";
import building from "../features/building/buildingSlice";
import door from "../features/door/doorSlice";
import service from "../features/service/serviceSlice";
import incidence from "../features/incidence/incidenceSlice";
import todo from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: {
    auth,
    building,
    door,
    service,
    incidence,
    todo,
  },
});
