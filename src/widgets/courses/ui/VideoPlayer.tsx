import React, { useCallback } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import { RootState, AppDispatch } from "@/app/store";
import { setActiveVideo } from "@/entities/courses/model/coursesSlice";



const VideoPlayerComponent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { activeVideoId, courses } = useSelector(
    (state: RootState) => state.courses,
    shallowEqual
  );
  const activeCourse = courses.find((c) => c.id === activeVideoId);

  const handleClose = useCallback(() => {
    dispatch(setActiveVideo(null));
  }, [dispatch]);

  if (!activeCourse) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4"
        onClick={handleClose} 
      >
        <motion.div
          key="modal"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          className="bg-gray-900 rounded shadow-lg max-w-3xl w-full relative"
          onClick={(e) => e.stopPropagation()} 
        >
          <button
            onClick={handleClose}
            className="absolute top-4 right-2 text-white text-2xl font-bold z-10"
          >
            <X />
          </button>
          <h3 className="text-white text-lg font-bold p-4">{activeCourse.title}</h3>
          <video
            src={activeCourse.videoUrl}
            controls
            autoPlay
            className="w-full h-auto rounded-b"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export const VideoPlayer = React.memo(VideoPlayerComponent);
