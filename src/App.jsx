import React, { useState } from "react";
import {
  Navbar,
  Footer,
  VideoHeader,
  Projects,
  AboutUs,
  ContactUs,
} from "./components";
import Services from "./components/Services";
import Pricing from "./components/Pricing";

function App() {
  const [selectedService, setSelectedService] = useState(null);

  const pricingData = {
    "Web Development": [
      {
        name: "Basic",
        price: "3000",
        features: ["5 Pages", "Basic SEO", "Responsive Design"],
      },
      {
        name: "Standard",
        price: "6000",
        features: [
          "10 Pages",
          "Advanced SEO",
          "CMS Integration",
          "E-commerce Features",
        ],
      },
      {
        name: "Premium",
        price: "10000",
        features: [
          "Unlimited Pages",
          "Full SEO Suite",
          "Custom Functionality",
          "24/7 Support",
        ],
      },
    ],
    "Mobile Apps": [
      {
        name: "Starter",
        price: "5000",
        features: ["iOS or Android", "Basic Features", "App Store Submission"],
      },
      {
        name: "Professional",
        price: "8000",
        features: [
          "iOS and Android",
          "Advanced Features",
          "Push Notifications",
          "Analytics Integration",
        ],
      },
      {
        name: "Enterprise",
        price: "15000",
        features: [
          "Cross-platform",
          "Custom API Integration",
          "Scalable Architecture",
          "Ongoing Maintenance",
        ],
      },
    ],
    "UI/UX Design": [
      {
        name: "Starter",
        price: "2500",
        features: ["iOS or Android", "Basic Features", "App Store Submission"],
      },
      {
        name: "Professional",
        price: "4000",
        features: [
          "iOS and Android",
          "Advanced Features",
          "Push Notifications",
          "Analytics Integration",
        ],
      },
      {
        name: "Enterprise",
        price: "10000",
        features: [
          "Cross-platform",
          "Custom API Integration",
          "Scalable Architecture",
          "Ongoing Maintenance",
        ],
      },
    ],
    "Figma": [
      {
        name: "Starter",
        price: "2500",
        features: ["iOS or Android", "Basic Features", "App Store Submission"],
      },
      {
        name: "Professional",
        price: "4000",
        features: [
          "iOS and Android",
          "Advanced Features",
          "Push Notifications",
          "Analytics Integration",
        ],
      },
      {
        name: "Enterprise",
        price: "10000",
        features: [
          "Cross-platform",
          "Custom API Integration",
          "Scalable Architecture",
          "Ongoing Maintenance",
        ],
      },
    ],
    // Add pricing data for other services...
  };

  const getServicePricing = () => {
    return selectedService
      ? pricingData[selectedService]
      : [
          {
            name: "Basic",
            price: "3000-5000",
            features: ["5 Projects", "Up to 10 users", "Basic support"],
          },
          {
            name: "Medium",
            price: "6000-8000",
            features: [
              "15 Projects",
              "Up to 50 users",
              "Priority support",
              "Advanced analytics",
            ],
          },
          {
            name: "Pro",
            price: "10000-15000",
            features: [
              "Unlimited Projects",
              "Unlimited users",
              "24/7 support",
              "Custom solutions",
            ],
          },
        ];
  };

  return (
    <>
      <Navbar />
      <VideoHeader />
      <Services
        onSelectService={setSelectedService}
        selectedService={selectedService}
      />
      <Pricing
        pricingData={getServicePricing()}
        selectedService={selectedService}
      />
      <Projects />
      <AboutUs />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
