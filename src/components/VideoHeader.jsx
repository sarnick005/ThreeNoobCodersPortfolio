import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import bgImg from "../assets/bg-img.jpg"; // Ensure this path is correct

const VideoHeader = () => {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]); // Adjust the range if needed

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Parallax Image */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          src={bgImg}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </motion.div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50" />
      {/* Content */}
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <motion.h1
          className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Three Noob Coders
        </motion.h1>
        <motion.p
          className="mt-6 text-2xl text-white max-w-3xl font-large"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Three engineering students fueled by caffeine and creativity,
          dedicated to bringing your projects to life. We’re not pros, but we’re
          getting there - slowly but surely!
        </motion.p>
      </div>
    </div>
  );
};

export default VideoHeader;
