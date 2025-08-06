import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/ProjectsDetails.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!projects.length) return null;

  const featuredProject = projects[0];
  const restProjects = projects.slice(1);
  const visibleProjects = showAll ? restProjects : restProjects.slice(0, 2);

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        {/* Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mt-8">
            Our Projects
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
            Showcasing our latest and greatest work
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <ProjectCard {...featuredProject} index={0} isFeatured />
        </motion.div>

        {/* Rest of Projects */}
        <div className="mt-16 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className={`transition duration-300 ${
                hoveredIndex !== null && hoveredIndex !== index
                  ? "filter blur-sm"
                  : "filter blur-none"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <ProjectCard {...project} index={index + 1} />
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {restProjects.length > 2 && (
          <div className="mt-12 text-center">
            <motion.button
              onClick={() => setShowAll((prev) => !prev)}
              className="px-8 py-3 bg-white text-black border border-black rounded-full transition duration-300 shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {showAll ? "Show Less Projects" : "Show More Projects"}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
