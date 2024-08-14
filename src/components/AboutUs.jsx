import React from "react";
import { motion } from "framer-motion";

const TeamMember = ({ name, role, imageUrl, index }) => (
  <motion.div
    className="space-y-6"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <motion.img
      className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
      src={imageUrl}
      alt={name}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    />
    <div className="space-y-2">
      <div className="text-lg leading-6 font-medium space-y-1">
        <h3 className="text-indigo-600">{name}</h3>
        <p className="text-gray-500">{role}</p>
      </div>
    </div>
  </motion.div>
);

const AboutUs = () => {
  const team = [
    { name: "Jane Cooper", role: "CEO", imageUrl: "https://i.pinimg.com/736x/9a/39/c8/9a39c85f9d87740dd04fd04aeb9d0d9e.jpg" },
    { name: "John Doe", role: "CTO", imageUrl: "https://i.pinimg.com/736x/9a/39/c8/9a39c85f9d87740dd04fd04aeb9d0d9e.jpg" },
    {
      name: "Alice Smith",
      role: "Head of Design",
      imageUrl: "https://i.pinimg.com/736x/9a/39/c8/9a39c85f9d87740dd04fd04aeb9d0d9e.jpg",
    },
  ];

  return (
    <motion.section
      id="about-us"
      className="bg-white py-12 sm:py-16 lg:py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Meet the team behind our success
          </p>
        </motion.div>
        <motion.div
          className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {team.map((member, index) => (
            <TeamMember key={index} {...member} index={index} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
