"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full transition-all bg-[#11141a]/20 backdrop-blur-md duration-300">
      <div className="max-w-screen-2xl mx-auto px-4 py-4 lg:px-10 lg:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-white">
            <img
              className="h-12 md:h-16"
              src="/titansalgo_Logo.PNG"
              alt="Logo"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            <a
              href="#"
              className="text-white hover:text-gray-300 font-semibold  transition-colors"
            >
              Features
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 font-semibold  transition-colors"
            >
              Results
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 font-semibold  transition-colors"
            >
              Discord
            </a>
            {/* Get Started Button */}
            <a className="group inline-flex items-center justify-center space-x-2 bg-white hover:opacity-90 text-black px-6 py-3 rounded-full transition-all duration-200 text-sm sm:text-base">
              <span>Get Started</span>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-screen opacity-100 py-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col space-y-4">
            <a
              href="#"
              className="text-white hover:text-gray-300  transition-colors"
            >
              Features
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Results
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Discord
            </a>
            <a
              href="#"
              className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors inline-block text-center"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
