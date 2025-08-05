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
  SiNextdotjs,
  SiShadcnui,
  SiExpress,
  SiPython,
  SiJavascript,
  SiJsonwebtokens,
  SiSocketdotio,
  SiRedis,
  SiGraphql,
  SiDocker,
  SiFirebase,
  SiSupabase,
  SiStripe,
  SiCloudinary,
  SiVercel,
  SiNetlify,
  SiRazorpay,
  SiFastapi,
} from "react-icons/si";

const TechIcon = ({ Icon, name, color }) => (
  <motion.div
    className="flex flex-col items-center p-2 min-w-[80px]"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className={`w-10 h-10 ${color}`} />
    <span className="mt-1 text-xs font-medium text-center leading-tight">
      {name}
    </span>
  </motion.div>
);

const TechSection = ({ title, icons }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex-1 min-w-[280px]"
  >
    <h2 className="text-xl font-bold text-center mb-3 text-gray-800">
      {title}
    </h2>
    <div className="flex flex-wrap justify-center gap-2 px-2">
      {icons.map((icon, index) => (
        <TechIcon key={index} {...icon} />
      ))}
    </div>
  </motion.div>
);

function TechStack() {
  const frontendIcons = [
    { Icon: FaHtml5, name: "HTML5", color: "text-orange-600" },
    { Icon: FaCss3Alt, name: "CSS3", color: "text-blue-600" },
    { Icon: FaJs, name: "JavaScript", color: "text-yellow-500" },
    { Icon: SiTypescript, name: "TypeScript", color: "text-blue-700" },
    { Icon: FaReact, name: "React", color: "text-cyan-600" },
    { Icon: SiTailwindcss, name: "Tailwind CSS", color: "text-teal-500" },
    { Icon: FaBootstrap, name: "Bootstrap", color: "text-purple-600" },
    { Icon: SiMui, name: "Material-UI", color: "text-blue-500" },
    { Icon: SiChakraui, name: "Chakra UI", color: "text-teal-600" },
    { Icon: SiDaisyui, name: "Daisy UI", color: "text-yellow-400" },
    { Icon: SiShadcnui, name: "shadcn/ui", color: "text-gray-900" },
  ];

  const backendIcons = [
    { Icon: FaNodeJs, name: "Node.js", color: "text-green-600" },
    { Icon: SiExpress, name: "Express.js", color: "text-gray-700" },
    { Icon: SiFlask, name: "Flask", color: "text-gray-800" },
    { Icon: SiFastapi, name: "FastAPI", color: "text-green-700" },
    { Icon: SiPython, name: "Python", color: "text-blue-500" },
    { Icon: SiTypescript, name: "TypeScript", color: "text-blue-700" },
    { Icon: SiJavascript, name: "JavaScript", color: "text-yellow-500" },
    { Icon: SiJsonwebtokens, name: "JWT", color: "text-purple-600" },
    { Icon: SiSocketdotio, name: "Socket.io", color: "text-gray-900" },
    { Icon: SiGraphql, name: "GraphQL", color: "text-pink-600" },
  ];

  const fullstackIcons = [
    { Icon: SiNextdotjs, name: "Next.js", color: "text-black" },
    { Icon: SiDjango, name: "Django", color: "text-green-800" },
    { Icon: SiFirebase, name: "Firebase", color: "text-yellow-600" },
    { Icon: SiSupabase, name: "Supabase", color: "text-green-500" },
    { Icon: SiStripe, name: "Stripe", color: "text-purple-700" },
    { Icon: SiRazorpay, name: "Razorpay", color: "text-blue-700" },
    { Icon: SiCloudinary, name: "Cloudinary", color: "text-blue-600" },
  ];

  const databaseIcons = [
    { Icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
    { Icon: SiMysql, name: "MySQL", color: "text-blue-600" },
    { Icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-400" },
    { Icon: SiRedis, name: "Redis", color: "text-red-600" },
    { Icon: SiDocker, name: "Docker", color: "text-blue-500" },
  ];

  return (
    <div className="p-8  bg-gray-100">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-gray-800 text-center mb-16"
      >
        Tech Stack
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <TechSection title="Frontend" icons={frontendIcons} />
        <TechSection title="Backend" icons={backendIcons} />
        <TechSection title="Fullstack & Services" icons={fullstackIcons} />
        <TechSection title="Database & Deploy" icons={databaseIcons} />
      </div>
    </div>
  );
}

export default TechStack;
