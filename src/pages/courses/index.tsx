import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCourses } from "@/entities/courses/model/coursesSlice";

import { CoursesList } from "@/widgets/courses/ui/CoursesList";

import type { AppDispatch } from "@/app/store";

const CoursesPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return <CoursesList />;
};

export default CoursesPage;
