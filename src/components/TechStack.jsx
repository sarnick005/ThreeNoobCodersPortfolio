import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFlask,
  SiMongodb,
  SiMysql,
  SiTypescript,
SiMui,
  SiDjango,
  SiChakraui,
  SiDaisyui,
  SiPostgresql,
} from "react-icons/si";

const TechIcon = ({ Icon, name, color }) => (
  <motion.div
    className="flex flex-col items-center p-3"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className={`w-12 h-12 ${color}`} />
    <span className="mt-2 text-sm font-medium">{name}</span>
  </motion.div>
);

const TechSection = ({ title, icons }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex-1 min-w-[200px]"
  >
    <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
      {title}
    </h2>
    <div className="flex flex-wrap justify-center gap-4">
      {icons.map((icon, index) => (
        <TechIcon key={index} {...icon} />
      ))}
    </div>
  </motion.div>
);

function TechStack() {
  const frontendIcons = [
    { Icon: FaHtml5, name: "HTML", color: "text-orange-600" },
    { Icon: FaCss3Alt, name: "CSS", color: "text-blue-600" },
    { Icon: FaJs, name: "JavaScript", color: "text-yellow-500" },
    { Icon: SiTypescript, name: "TypeScript", color: "text-blue-700" },
    { Icon: FaReact, name: "React", color: "text-cyan-600" },
    { Icon: SiTailwindcss, name: "Tailwind", color: "text-teal-500" },
    { Icon: FaBootstrap, name: "Bootstrap", color: "text-purple-600" },
    { Icon: SiMui, name: "Material-UI", color: "text-blue-500" },
    { Icon: SiChakraui, name: "Chakra UI", color: "text-teal-600" },
    { Icon: SiDaisyui, name: "Daisy UI", color: "text-yellow-400" },
  ];

  const backendIcons = [
    { Icon: FaNodeJs, name: "Node.js", color: "text-green-600" },
    { Icon: SiFlask, name: "Flask", color: "text-gray-800" },
    { Icon: SiDjango, name: "Django", color: "text-green-800" },
  ];

  const databaseIcons = [
    { Icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
    { Icon: SiMysql, name: "MySQL", color: "text-blue-600" },
    { Icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-400" },
  ];

  return (
    <div className="p-8 bg-gray-100">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-gray-800 text-center mb-8"
      >
        My Tech Stack
      </motion.h1>
      <div className="flex flex-col md:flex-row gap-8 justify-between">
        <TechSection title="Frontend" icons={frontendIcons} />
        <TechSection title="Backend" icons={backendIcons} />
        <TechSection title="Databases" icons={databaseIcons} />
      </div>
    </div>
  );
}

export default TechStack;
