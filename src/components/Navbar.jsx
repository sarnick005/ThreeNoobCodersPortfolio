import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png"; // Adjust the path if needed

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu visibility

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed w-full z-10 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 ml-10">
            <img
              src={logo}
              alt="Company Logo"
              className="h-20 w-auto object-contain mt-4 mb-4"
              style={{ backgroundColor: "transparent" }}
            />
          </div>
          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:space-x-8 mt-3">
            {["Projects", "Services", "Pricing", "About Us", "Contact Us"].map(
              (item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`${
                    scrolled
                      ? "text-gray-500 hover:text-gray-900"
                      : "text-white hover:text-gray-200"
                  } px-3 py-2 rounded-md font-large text-xl`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              )
            )}
          </div>
          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white z-20 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } sm:hidden`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center space-y-6 mt-8">
            {["Projects", "Services", "Pricing", "About Us", "Contact Us"].map(
              (item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-gray-800 hover:text-gray-600 text-2xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)} // Close the menu on item click
                >
                  {item}
                </motion.a>
              )
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
