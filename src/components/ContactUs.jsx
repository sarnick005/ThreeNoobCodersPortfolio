import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

// AnimatedIcon (no circle, just icons)
const AnimatedIcon = ({ icon: Icon, href, label, delay = 0 }) => {
  const hoverColors = {
    Instagram: "group-hover:text-pink-500",
    Email: "group-hover:text-red-500",
    Twitter: "group-hover:text-black",
    LinkedIn: "group-hover:text-blue-600",
  };

  return (
    <motion.a
      href={href}
      className="group relative transition-all duration-300"
      whileHover={{ scale: 1.1, y: -3 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="sr-only">{label}</span>
      <Icon
        className={`h-7 w-7 sm:h-8 sm:w-8 text-gray-600 transition-colors duration-300 ${hoverColors[label]}`}
      />

      {/* Tooltip */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        {label}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-4 border-transparent border-t-gray-800"></div>
      </div>
    </motion.a>
  );
};

// ContactUs
const ContactUs = () => {
  const socialLinks = [
    {
      icon: FaInstagram,
      href: "https://instagram.com/ThreeNoobCoders",
      label: "Instagram",
    },
    {
      icon: Mail,
      href: "mailto:threenoobcoders@gmail.com",
      label: "Email",
    },
    {
      icon: FaXTwitter,
      href: "https://x.com/ThreeNoobCoders",
      label: "Twitter",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/three-noob-coders-990538324/",
      label: "LinkedIn",
    },
  ];

  return (
    <motion.section
      id="contact-us"
      className="relative min-h-screen flex flex-col justify-center items-center py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Let's Connect
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Ready to bring your ideas to life? Reach out through any of these channels
          </p>
        </motion.div>

        {/* Icons */}
        <motion.div
          className="flex justify-center items-center gap-6 sm:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {socialLinks.map((link, index) => (
            <AnimatedIcon
              key={link.label}
              icon={link.icon}
              href={link.href}
              label={link.label}
              delay={0.6 + index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactUs;
