import React, { useState } from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ title, index, isSelected, onClick }) => (
  <motion.div
    className={`overflow-hidden shadow hover:shadow-xl transition-shadow duration-300 ${
      isSelected ? "ring-2 ring-black" : ""
    } rounded-full py-4 px-6 cursor-pointer text-5xl`}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.05 }}
    onClick={onClick}
  >
    <div className="text-center">
      <h3 className="text-2xl leading-6 font-medium text-gray-900">{title}</h3>
    </div>
  </motion.div>
);

const Services = ({ onSelectService }) => {
  const services = ["Fullstack Webapp", "Basic Website", "Figma to Web"];

 
  const [selectedService, setSelectedService] = useState("Basic Website");

  const handleSelectService = (service) => {
    setSelectedService(service);
    onSelectService(service);
  };

  return (
    <section
      id="services"
      className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mt-8">
            Our Services
          </h2>
          <p className="mt-3 text-2xl text-gray-700 max-w-2xl mx-auto 0 sm:mt-4">
            Comprehensive digital solutions tailored to your needs
          </p>
        </motion.div>
        <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none text-xl">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service}
              index={index}
              isSelected={service === selectedService}
              onClick={() => handleSelectService(service)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
