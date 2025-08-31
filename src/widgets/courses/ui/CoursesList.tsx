import React, { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import type { AppDispatch, RootState } from "@/app/store";
import { fetchCourses } from "@/entities/courses/model/coursesSlice";

const CourseCard = lazy(() => import("./CourseCard"));

export const CoursesList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { courses, loading, error } = useSelector(
    (state: RootState) => state.courses,
    shallowEqual
  );

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  if (loading) return <p>Loading courses...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Suspense fallback={<p>Loading course...</p>}>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </Suspense>
    </div>
  );
};
