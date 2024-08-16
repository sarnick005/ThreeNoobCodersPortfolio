import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpIcon } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300); // Show button after scrolling 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      className={`fixed bottom-4 right-4 z-50 p-2 bg-gray-800 rounded-full ${
        visible ? "block" : "hidden"
      }`}
      onClick={scrollToTop}
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <ArrowUpIcon className="h-6 w-6 text-white" />
    </motion.div>
  );
};

export default ScrollToTop;
