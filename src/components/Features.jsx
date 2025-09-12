import React from "react";
import { motion } from "framer-motion";

const Features = ({ darkMode }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose <span className="text-amber-500">AL AHAD</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`p-6 rounded-xl shadow-lg ${
              darkMode ? "bg-gray-800" : "bg-white"
            } text-center`}
          >
            <div className="w-16 h-16 bg-indigo-100 dark:bg-amber-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-amber-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Tutors</h3>
            <p>
              Our tutors are highly qualified and experienced in their
              respective fields.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`p-6 rounded-xl shadow-lg ${
              darkMode ? "bg-gray-800" : "bg-white"
            } text-center`}
          >
            <div className="w-16 h-16 bg-indigo-100 dark:bg-amber-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-amber-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Personalized Learning
            </h3>
            <p>
              Customized lesson plans tailored to each student's unique needs
              and goals.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`p-6 rounded-xl shadow-lg ${
              darkMode ? "bg-gray-800" : "bg-white"
            } text-center`}
          >
            <div className="w-16 h-16 bg-indigo-100 dark:bg-amber-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-amber-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
            <p>Choose session times that work best for your busy schedule.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
