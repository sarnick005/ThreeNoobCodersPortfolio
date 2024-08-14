import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, imageUrl, index }) => (
  <motion.div
    className="flex flex-col rounded-lg shadow-lg overflow-hidden"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="flex-shrink-0">
      <img className="h-48 w-full object-cover" src={imageUrl} alt={title} />
    </div>
    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-3 text-base text-gray-500">{description}</p>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A fully responsive online store with integrated payment systems.",
      imageUrl: "https://i.pinimg.com/564x/f0/89/0c/f0890c7917038ab80eb076233a02dcbf.jpg",
    },
    {
      title: "IoT Dashboard",
      description: "Real-time monitoring system for smart home devices.",
      imageUrl: "https://i.pinimg.com/564x/f0/89/0c/f0890c7917038ab80eb076233a02dcbf.jpg",
    },
    {
      title: "AI-Powered Chatbot",
      description:
        "Customer service bot with natural language processing capabilities.",
      imageUrl: "https://i.pinimg.com/564x/f0/89/0c/f0890c7917038ab80eb076233a02dcbf.jpg",
    },
  ];

  return (
    <section id="projects" className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Projects
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Showcasing our latest and greatest work
          </p>
        </motion.div>
        <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
