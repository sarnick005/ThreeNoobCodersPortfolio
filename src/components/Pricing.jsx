import React from "react";
import { motion } from "framer-motion";

const PricingTier = ({ name, price, features, index }) => (
  <motion.div
    className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{
      scale: 1.05,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    }}
  >
    <div className="px-6 py-8">
      <h3 className="text-2xl font-semibold text-gray-900">{name}</h3>
      <p className="mt-4 text-3xl font-extrabold text-gray-900">Rs. {price}</p>
      <p className="mt-1 text-sm text-gray-500">per month</p>
    </div>
    <div className="px-6 pt-6 pb-8">
      <ul className="mt-6 space-y-4">
        {features.map((feature, idx) => (
          <motion.li
            key={idx}
            className="flex"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + idx * 0.1 }}
          >
            <svg
              className="flex-shrink-0 h-6 w-6 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="ml-3 text-base text-gray-500">{feature}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Pricing = ({ pricingData, selectedService }) => {
  return (
    <section id="pricing" className="bg-gray-50 py-12 sm:py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Pricing Plans
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            {selectedService
              ? `Pricing for ${selectedService}`
              : "Choose the perfect plan for your needs"}
          </p>
        </motion.div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {pricingData.map((tier, index) => (
            <PricingTier key={index} {...tier} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
