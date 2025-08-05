import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = ({ url, containerDimensions, description }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative flex justify-center items-center"
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
      <img src={url} alt="Project" className="w-full h-full object-cover" />
      {hovered && (
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-white text-center text-sm sm:text-lg">
            {description}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

const ProjectCard = ({
  title,
  description,
  imageUrls,
  index,
  liveDemo,
  isFeatured = false,
}) => {
  const [containerDimensions, setContainerDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [hovered, setHovered] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const height = isFeatured ? width * 0.6 : width * 0.5625;
        setContainerDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [isFeatured]);

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
      className={`rounded-xl shadow-xl overflow-hidden relative transition-transform duration-300 hover:scale-[1.02] ${
        isFeatured
          ? "lg:row-span-2 lg:col-span-1 w-full h-full"
          : "max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
      } mx-auto`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div ref={containerRef} className="relative w-full overflow-hidden">
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

        {hovered && liveDemo && (
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 bg-white text-black rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200 flex items-center"
          >
            <span className="text-sm font-semibold">Live Demo</span>
          </a>
        )}

        {isFeatured && (
          <span className="absolute top-4 left-4 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
            Featured
          </span>
        )}
      </div>

      <div className="p-5">
        <h2
          className={`font-semibold text-gray-900 ${
            isFeatured ? "text-2xl mb-2" : "text-lg sm:text-xl"
          }`}
        >
          {title}
        </h2>
        {/* {isFeatured && (
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        )} */}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
