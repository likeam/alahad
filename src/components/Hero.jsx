import React from "react";
import { motion } from "framer-motion";

const Hero = ({ darkMode }) => {
  return (
    <section
      id="home"
      className="relative pt-24 pb-16 flex items-center justify-center min-h-screen"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xhc3Nyb29tfGVufDB8fDB8fHww)`,
        }}
      ></div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Officers Academy <span className="text-amber-500">Hafizabad</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
        >
          Expert tutoring PPSC ,NTS, OTS,MPT,FPSC preparations. Achieve academic
          excellence with our personalized approach.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
            Explore Courses
          </button>
          <button
            className={`border border-amber-500 ${
              darkMode ? "text-white" : "text-amber-500"
            } hover:bg-amber-500 hover:text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors`}
          >
            Free Trial
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
