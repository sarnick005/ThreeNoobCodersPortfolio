import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const AnimatedIcon = ({ icon: Icon, href, label }) => (
  <motion.a
    href={href}
    className="text-gray-400 hover:text-gray-500"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="sr-only">{label}</span>
    <Icon className="h-8 w-8" />
  </motion.a>
);

const ContactUs = () => {
  return (
    <motion.section
      id="contact-us"
      className="py-12 sm:py-16 lg:py-20"
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
          <AnimatedIcon
            icon={FaInstagram}
            href="https://instagram.com/ThreeNoobCoders"
            label="Instagram"
          />
          <AnimatedIcon
            icon={Mail}
            href="mailto:threenoobcoders@gmail.com"
            label="Email"
          />
          <AnimatedIcon
            icon={FaXTwitter}
            href="https://x.com/ThreeNoobCoders"
            label="Twitter"
          />
          <AnimatedIcon
            icon={Linkedin}
            href="https://www.linkedin.com/in/three-noob-coders-990538324/"
            label="LinkedIn"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactUs;
