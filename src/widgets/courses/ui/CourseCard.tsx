import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import type { RootState } from "@/app/store";
import { purchaseCourse, setActiveVideo } from "@/entities/courses/model/coursesSlice";
import { Course } from "@/entities/courses/model/types";



interface CourseCardProps {
  course: Course;
}

const CourseCardComponent: React.FC<CourseCardProps> = ({ course }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const purchased = useSelector(
    (state: RootState) => state.courses.purchasedCourses.includes(course.id)
  );
  const user = useSelector((state: RootState) => state.auth.user);

  const handlePurchase = () => {
    if (!user) {
      toast.error("You must be logged in to purchase a course!");
      return navigate("/auth");
    }
    dispatch(purchaseCourse(course.id));
    toast.success(`You have successfully purchased the course "${course.title}"!`);
  };

  const handlePlay = () => {
    if (!user) {
      toast.error("You must be logged in to watch videos!");
      return navigate("/auth");
    }
    dispatch(setActiveVideo(course.id));
  };

  return (
    <div className="bg-white shadow rounded p-4 flex flex-col gap-3">
      <h3 className="font-bold text-lg">{course.title}</h3>
      {course.imageUrl && (
        <img src={course.imageUrl} alt={course.title} className="w-full h-40 object-contain rounded" />
      )}
      <p className="text-gray-600">{course.description}</p>
      <div className="flex justify-between items-center mt-auto">
        <span className="font-semibold">{course.price}$</span>
        <div className="flex gap-2">
          <button
            onClick={handlePlay}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
          >
            Play
          </button>
          <button
            onClick={handlePurchase}
            disabled={purchased}
            className={`px-3 py-1 rounded transition ${
              purchased ? "bg-gray-400 text-white cursor-not-allowed" : "bg-green-500 text-white hover:bg-green-600"
            }`}
          >
            {purchased ? "Purchased" : "Buy"}
          </button>
        </div>
      </div>
    </div>
  );
};

// обгортаємо в memo
 const CourseCard = React.memo(CourseCardComponent);

export default CourseCard;
