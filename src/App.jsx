import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Homepage";
import Education1 from "./templates/Education1";
import Cake from "./templates/Cake1";
import KolkataCafe from "./templates/Cafe1";
import Business from "./templates/BusinessLandingPage";
import Gallery1 from "./templates/Art1";
import Cake2 from "./templates/Cake2";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/edu/1" element={<Education1 />} />
      <Route path="/cake/1" element={<Cake />} />
      <Route path="/cake/2" element={<Cake2 />} />
      <Route path="/cafe/1" element={<KolkataCafe />} />
      <Route path="/business/1" element={<Business />} />
      <Route path="/art/1" element={<Gallery1 />} />
    </Routes>
  );
};

export default App;
