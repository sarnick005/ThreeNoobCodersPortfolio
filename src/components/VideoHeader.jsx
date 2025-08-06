import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
// import bgImg from "../assets/background gray aesthetic.jpg"; // Ensure this path is correct
// import bgImg from "../assets/Blue wallpaper.jpg";
import bgImg from "../assets/bg-img.jpg";
// import bgImg from "../assets/light & dark grey wallpaper.jpg";
// import bgImg from "../assets/background gray aesthetic.jpg";

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

      {/* Content */}
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <motion.h1
          className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
         Professional Websites For Modern Businesses
        </motion.h1>
        <motion.p
          className="mt-6 text-2xl text-white max-w-3xl font-large"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The Best & Affordable Website Development Services
        </motion.p>
      </div>
    </div>
  );
};

export default VideoHeader;
