import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 border-t border-gray-200/60">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Copyright with Heart */}
          <p className="text-sm text-gray-500 flex items-center gap-1 text-center sm:text-left">
            © 2025 Three Noob Coders. Made with{" "}
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="h-4 w-4 text-red-500 fill-current" />
            </motion.span>
          </p>

          {/* Quick Links */}
          <div className="flex gap-6 text-sm">
            <motion.a
              href="#projects"
              className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Projects
            </motion.a>
            <motion.a
              href="#services"
              className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Services
            </motion.a>
            <motion.a
              href="#about-us"
              className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              About
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
