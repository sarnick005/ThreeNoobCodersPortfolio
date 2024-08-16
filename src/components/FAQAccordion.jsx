import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon, MinusIcon } from "lucide-react";

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="border-b border-gray-200">
      <div
        className="flex justify-between items-center py-3 cursor-pointer"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-semibold text-gray-900">{question}</h3>
        <span>
          {isOpen ? (
            <MinusIcon className="h-6 w-6 text-gray-500" />
          ) : (
            <PlusIcon className="h-6 w-6 text-gray-500" />
          )}
        </span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
          >
            <div className="p-4 text-gray-700">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQAccordion = () => {
  const faqData = [
    {
      question: "What is your return policy?",
      answer:
        "Our return policy allows returns within 30 days of purchase. Please ensure the items are in their original condition.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping typically takes 5-7 business days. Expedited shipping options are available at checkout.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to most countries. Shipping costs and times vary by destination.",
    },
  ];

  return (
    <section className="max-w-2xl mx-auto p-6 ">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Frequently Asked Questions
      </h2>
      {faqData.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </section>
  );
};

export default FAQAccordion;
