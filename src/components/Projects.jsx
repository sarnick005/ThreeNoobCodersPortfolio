import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/ProjectsDetails.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20">
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-4xl mt-8">
            Our Projects
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Showcasing our latest and greatest work
          </p>
        </motion.div>
        <div className="mt-12 space-y-20 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50,
    },
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.imageUrls.length - 1 : prevIndex - 1
    );
  };

  const ImageSection = () => (
    <motion.div className="w-1/2" variants={variants}>
      <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
        {project.imageUrls && project.imageUrls.length > 0 ? (
          <>
            <img
              src={project.imageUrls[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "/api/placeholder/400/320";
                e.target.alt = "Placeholder image";
              }}
            />
            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              &#10094;
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              &#10095;
            </button>
          </>
        ) : (
          <img
            src="/api/placeholder/400/320"
            alt="Placeholder image"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </div>
    </motion.div>
  );

  const DescriptionSection = () => (
    <motion.div
      className="w-1/2 flex flex-col justify-center px-6"
      variants={variants}
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      {project.liveDemo && (
        <a
          href={project.liveDemo}
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Live Demo
        </a>
      )}
    </motion.div>
  );

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      className="flex items-center"
    >
      {index % 2 === 0 ? (
        <>
          <ImageSection />
          <DescriptionSection />
        </>
      ) : (
        <>
          <DescriptionSection />
          <ImageSection />
        </>
      )}
    </motion.div>
  );
};

export default Projects;
