import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard"; // Adjust the import path as needed
import { motion } from "framer-motion";
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
        <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-1 lg:max-w-none text-2xl">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
