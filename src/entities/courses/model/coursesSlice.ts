import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { mockCourses } from "../../../app/mock";

import { Course, CourseState } from "./types";

const initialState: CourseState = {
  courses: [],
  purchasedCourses: [],
  loading: false,
  error: null,
  activeVideoId: null,
};

/**
 * Mock API 
 */
export const fetchCourses = createAsyncThunk<Course[]>(
  "courses/fetchCourses",
  async () => {
    await new Promise((res) => setTimeout(res, 800));
    return mockCourses;
  }
);

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    /**
     * Add course to list of purchased courses
     */
    purchaseCourse: (state, action: PayloadAction<string>) => {
      if (!state.purchasedCourses.includes(action.payload)) {
        state.purchasedCourses.push(action.payload);
      }
    },
    /**
     * Set active video
     */
    setActiveVideo: (state, action: PayloadAction<string | null>) => {
      state.activeVideoId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load courses";
      });
  },
});

export const { purchaseCourse, setActiveVideo } = coursesSlice.actions;
export default coursesSlice.reducer;
