import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = ({ url, containerDimensions, description }) => {
  const [hovered, setHovered] = useState(false);
  const imageRef = useRef(null);

  return (
    <motion.div
      className="slide-container relative flex justify-center items-center"
      style={{
        width: containerDimensions.width,
        height: containerDimensions.height,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0.9 }}
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <img
        ref={imageRef}
        src={url}
        alt="Project"
        className="w-full h-full object-cover"
      />
      {hovered && (
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-white text-sm sm:text-lg px-4 text-center">
            {description}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

const ProjectCard = ({ title, description, imageUrls, index, liveDemo }) => {
  const [containerDimensions, setContainerDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [hovered, setHovered] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const containerHeight = containerWidth * 0.5625; // 16:9 aspect ratio
        setContainerDimensions({
          width: containerWidth,
          height: containerHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: false,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <motion.div
      className="rounded-lg shadow-lg overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ marginBottom: "20px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        ref={containerRef}
        className="flex-shrink-0 w-full overflow-hidden relative"
      >
        <Slider {...settings}>
          {imageUrls.map((url, i) => (
            <Slide
              key={i}
              url={url}
              containerDimensions={containerDimensions}
              description={description}
            />
          ))}
        </Slider>
        {hovered && (
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 bg-white text-black rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200 flex items-center"
          >
            <span className="text-sm font-semibold">Live Demo</span>
          </a>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
          {title}
        </h2>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
