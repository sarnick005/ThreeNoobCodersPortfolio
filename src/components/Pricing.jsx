import React from "react";
import { motion } from "framer-motion";

const Pricing = ({ pricingData, selectedService }) => {
  return (
    <section
      id="pricing"
      className=" bg-gradient-to-br from-gray-50 to-gray-100 py-20 "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Pricing Plans
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-2xl text-gray-700">
            {selectedService
              ? `Pricing for ${selectedService}`
              : "Find the perfect plan for your needs and budget."}
          </p>
        </motion.div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-6xl mx-auto">
          {pricingData.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              {/* Image Section */}
              <div className="overflow-hidden h-48">
                <img
                  src={tier.image}
                  alt={tier.name}
                  className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
                />
              </div>

              {/* Pricing Content */}
              <div className="px-6 py-6 bg-white">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {tier.name}
                </h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold text-gray-900">
                    Rs. {tier.price}
                  </span>
                </div>
              </div>

              {/* Features List */}
              <div className="px-6 pt-4 pb-8 bg-gray-50">
                <ul className="space-y-3 ">
                  {tier.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start text-2xl"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                    >
                      <svg
                        className="flex-shrink-0 h-7 w-7 text-green-700"
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
                      <span className="ml-2 text-lg text-gray-700 ">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

// 
