import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const courses = [
  {
    id: 1,
    title: "Mathematics Mastery",
    description: "Comprehensive math tutoring for all levels",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    level: "All Levels",
  },
  {
    id: 2,
    title: "Science Discovery",
    description: "Explore the wonders of science with expert guidance",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    level: "Beginner to Advanced",
  },
  {
    id: 3,
    title: "Language Arts",
    description: "Improve reading, writing and communication skills",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    level: "All Ages",
  },
  {
    id: 4,
    title: "Coding & Robotics",
    description: "Introduction to programming and robotics concepts",
    image:
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    level: "Ages 8-16",
  },
];

const CourseCarousel = ({ darkMode }) => {
  const [currentCourse, setCurrentCourse] = useState(0);

  const nextCourse = () => {
    setCurrentCourse((prev) => (prev === courses.length - 1 ? 0 : prev + 1));
  };

  const prevCourse = () => {
    setCurrentCourse((prev) => (prev === 0 ? courses.length - 1 : prev - 1));
  };

  return (
    <section id="courses" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our <span className="text-amber-500">Courses</span>
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-xl shadow-2xl">
            <motion.div
              key={currentCourse}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-96 bg-gray-300 dark:bg-gray-700"
            >
              <img
                src={courses[currentCourse].image}
                alt={courses[currentCourse].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    {courses[currentCourse].title}
                  </h3>
                  <p className="mb-2">{courses[currentCourse].description}</p>
                  <span className="inline-block bg-amber-500 text-sm px-3 py-1 rounded-full">
                    {courses[currentCourse].level}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          <button
            onClick={prevCourse}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextCourse}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="flex justify-center mt-4 space-x-2">
            {courses.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCourse(index)}
                className={`w-3 h-3 rounded-full ${
                  currentCourse === index ? "bg-amber-500" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCarousel;
