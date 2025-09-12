import React from "react";
import { useState } from "react";

const Header = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`fixed w-full z-50 ${
        darkMode ? "bg-gray-800" : "bg-white"
      } shadow-md`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-amber-500">AL ALAHAD</h1>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-md ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
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
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-amber-500 transition-colors">
            Home
          </a>
          <a href="#courses" className="hover:text-amber-500 transition-colors">
            Courses
          </a>
          <a href="#about" className="hover:text-amber-500 transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-amber-500 transition-colors">
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full ${
              darkMode
                ? "bg-yellow-400 text-gray-900"
                : "bg-gray-800 text-yellow-400"
            }`}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center space-x-2"
          >
            <span>WhatsApp</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.932 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.526.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.05-.084-.182-.133-.38-.232z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden ${
            darkMode ? "bg-gray-800" : "bg-white"
          } px-4 py-2 shadow-lg`}
        >
          <div className="flex flex-col space-y-3 pb-3">
            <a
              href="#home"
              className="hover:text-amber-500 transition-colors py-2"
            >
              Home
            </a>
            <a
              href="#courses"
              className="hover:text-amber-500 transition-colors py-2"
            >
              Courses
            </a>
            <a
              href="#about"
              className="hover:text-amber-500 transition-colors py-2"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-amber-500 transition-colors py-2"
            >
              Contact
            </a>

            <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full ${
                  darkMode
                    ? "bg-yellow-400 text-gray-900"
                    : "bg-gray-800 text-yellow-400"
                }`}
              >
                {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
              </button>

              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center space-x-2"
              >
                <span>WhatsApp</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.932 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.526.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.05-.084-.182-.133-.38-.232z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
