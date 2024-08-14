import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span
              className={`text-2xl font-bold ${
                scrolled ? "text-indigo-600" : "text-white"
              }`}
            >
              Three Noob Coders
            </span>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8 mt-3">
            {["Services", "Pricing", "Projects", "About Us", "Contact Us"].map(
              (item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`${
                    scrolled
                      ? "text-gray-500 hover:text-gray-900"
                      : "text-white hover:text-gray-200"
                  } px-3 py-2 rounded-md text-sm font-medium`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
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
