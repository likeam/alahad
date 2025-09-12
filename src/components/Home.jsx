import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import CourseCarousel from "./CourseCarousel";
import Features from "./Features";
import ContactForm from "./ContactForm"; // Add this import
import Footer from "./Footer";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference for dark mode
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero darkMode={darkMode} />
      <CourseCarousel darkMode={darkMode} />
      <Features darkMode={darkMode} />
      <ContactForm darkMode={darkMode} /> {/* Add this line */}
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Home;
