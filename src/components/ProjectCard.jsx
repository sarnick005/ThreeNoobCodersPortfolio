import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Slide = ({ url, containerDimensions }) => {
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });
  const imageRef = useRef(null);

  useEffect(() => {
    const updateImageDimensions = () => {
      if (
        imageRef.current &&
        containerDimensions.width &&
        containerDimensions.height
      ) {
        const img = imageRef.current;
        const imgAspectRatio = img.naturalWidth / img.naturalHeight;
        const containerAspectRatio =
          containerDimensions.width / containerDimensions.height;

        let newWidth, newHeight;

        if (imgAspectRatio > containerAspectRatio) {
          newWidth = containerDimensions.width;
          newHeight = containerDimensions.width / imgAspectRatio;
        } else {
          newHeight = containerDimensions.height;
          newWidth = containerDimensions.height * imgAspectRatio;
        }

        setImageDimensions({ width: newWidth, height: newHeight });
      }
    };

    updateImageDimensions();
    window.addEventListener("resize", updateImageDimensions);
    return () => window.removeEventListener("resize", updateImageDimensions);
  }, [containerDimensions]);

  return (
    <div
      className="slide-container bg-gradient-to-br from-gray-50 to-gray-100"
      style={{
        width: containerDimensions.width,
        height: containerDimensions.height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        ref={imageRef}
        src={url}
        alt="Project"
        className="slide"
        style={{
          width: `${imageDimensions.width}px`,
          height: `${imageDimensions.height}px`,
          objectFit: "contain",
        }}
      />
    </div>
  );
};

const ProjectCard = ({ title, description, imageUrls, index, liveDemo }) => {
  const [containerDimensions, setContainerDimensions] = useState({
    width: 0,
    height: 0,
  });
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const containerHeight = containerRef.current.offsetHeight;
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
    adaptiveHeight: false,
  };

  return (
    <motion.div
      className={`flex flex-col lg:flex-row rounded-lg shadow-lg overflow-hidden ${
        index % 2 === 0 ? "lg:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        ref={containerRef}
        className="bg-gradient-to-br from-gray-50 to-gray-100 flex-shrink-0 w-full lg:w-1/2 overflow-hidden relative"
        style={{ height: "300px" }}
      >
        <Slider ref={sliderRef} {...settings}>
          {imageUrls.map((url, i) => (
            <Slide
              key={i}
              url={url}
              containerDimensions={containerDimensions}
            />
          ))}
        </Slider>
        <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faArrowRight} className="text-gray-600" />
        </a>
      </div>
      <div className="flex-1 p-6 flex flex-col justify-between lg:w-1/2 ">
        <div className="flex-1 ">
          <h2 className="text-3xl font-semibold text-gray-900">{title}</h2>
          <h4 className="mt-3 text-xl  text-gray-500">{description}</h4>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
