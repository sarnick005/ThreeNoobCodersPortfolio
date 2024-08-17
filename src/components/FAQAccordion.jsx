import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon, MinusIcon } from "lucide-react";

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="border-b border-gray-200">
      <div
        className="flex justify-between items-center py-4 cursor-pointer"
        onClick={toggleOpen}
      >
        <h3 className="text-xl font-semibold text-gray-900">{question}</h3> 
        <span>
          {isOpen ? (
            <MinusIcon className="h-7 w-7 text-gray-500" /> 
          ) : (
            <PlusIcon className="h-7 w-7 text-gray-500" /> 
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
            <div className="p-5 text-lg text-gray-700">{answer}</div> 
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQAccordion = () => {
  const faqData = [
    {
      question: "How much time does it take to make a website?",
      answer:
        "It depends on the complexity of the website. On average, small websites take about 2-3 days, while larger projects can take 7-10 days.",
    },
    {
      question: "How much do I need to pay upfront?",
      answer: "A 40% advance payment is required to begin the project.",
    },
    {
      question: "Do you offer deployment services?",
      answer:
        "Currently, deployment services are unavailable. However, We can provide this service for an additional charge in the future.",
    },
    {
      question: "What is your return policy?",
      answer:
        "If the client is not satisfied with the project, a refund can be processed within 7 days. However, a 25% charge will be deducted to cover the cost of the work done.",
    },
    {
      question: "Do you offer post-launch support?",
      answer:
        "Yes, We offer 30 days of free support for any bugs or minor changes after the website is launched.",
    },
    {
      question: "Can you assist with website maintenance?",
      answer:
        "Yes, We provide website maintenance packages. The cost depends on the frequency of updates and maintenance needed",
    },
    {
      question: "How do you handle revisions?",
      answer:
        "We allow up to 3 revisions per project to ensure the final product meets your expectations.",
    },
    {
      question: "What are your payment methods?",
      answer:
        "We accept payments via bank transfer, PhonePe, GPay and other major payment gateways.",
    },
  ];

  return (
    <section className="max-w-3xl mx-auto p-8"> {/* Increased width */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6"> {/* Increased heading size */}
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
