import React from "react";
import { motion } from "framer-motion";
import { Instagram, Mail, Video, Linkedin } from "lucide-react";

const AnimatedIcon = ({ icon: Icon, href }) => (
  <motion.a
    href={href}
    className="text-gray-400 hover:text-gray-500"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
  >
    <span className="sr-only">{Icon.name}</span>
    <Icon className="h-8 w-8" />
  </motion.a>
);

const ContactUs = () => {
  return (
    <motion.section
      id="contact-us"
      className="bg-gray-50 py-12 sm:py-16 lg:py-20"
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
            Contact Us
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Get in touch with us through these channels
          </p>
        </motion.div>
        <motion.div
          className="mt-12 flex justify-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AnimatedIcon icon={Instagram} href="#" />
          <AnimatedIcon icon={Mail} href="#" />
          <AnimatedIcon icon={Video} href="#" />
          <AnimatedIcon icon={Linkedin} href="#" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactUs;
