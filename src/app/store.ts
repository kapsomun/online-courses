import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "@/entities/course/model/coursesSlice";
import authReducer from "@/features/auth/model/authSlice";

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
