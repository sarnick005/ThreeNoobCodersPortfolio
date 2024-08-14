import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";

const VideoHeader = () => {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <div className="relative bg-gray-900 h-screen">
      <motion.div className="absolute inset-0 overflow-hidden" style={{ y }}>
        <img
          src="https://images.unsplash.com/photo-1723030530413-34305c82c61a?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Video placeholder"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <motion.h1
          className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Three noob coders 
        </motion.h1>
        <motion.p
          className="mt-6 text-xl text-white max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Innovative solutions for your digital needs
        </motion.p>
      </div>
    </div>
  );
};

export default VideoHeader;
