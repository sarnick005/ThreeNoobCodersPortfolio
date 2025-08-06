import React, { useState, useEffect } from "react";
import {
  Navbar,
  Footer,
  VideoHeader,
  Projects,
  AboutUs,
  ContactUs,
  FAQAccordion,
  ScrollToTop,
  TechStack
} from "../components";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const [pricingData, setPricingData] = useState({});
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const fetchPricingData = async () => {
      try {
        const response = await fetch("/Price.json"); 
        const data = await response.json();
        setPricingData(data);
      } catch (error) {
        console.error("Failed to fetch pricing data", error);
      }
    };

    fetchPricingData();
  }, []);

  const getServicePricing = () => {
    if (selectedService && pricingData[selectedService]) {
      return pricingData[selectedService];
    }
    return pricingData["Basic Website"] || [];
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#eef7fe",
          fontFamily: "'Caveat', cursive",
        }}
        className="bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <Navbar />
        <VideoHeader />
        <Projects />
        <Services
          onSelectService={setSelectedService}
          selectedService={selectedService}
        />
        <Pricing
          pricingData={getServicePricing()}
          selectedService={selectedService}
        />
        <AboutUs />
        <TechStack />
        <FAQAccordion />
        <ContactUs />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default Home;
