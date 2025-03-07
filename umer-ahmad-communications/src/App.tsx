import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";

const App: React.FC = () => {
  const navLinks = [
    { name: "Home", href: "/" }, // Home page
    { name: "About Us", href: "#about" }, // Section on Home page
    { name: "Services", href: "#services" }, // Section on Home page
    { name: "Contact Us", href: "/contact" }, // Separate Contact Us page
  ];

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <Header title="Umer Ahmad Communications" links={navLinks} />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUs />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>

        {/* Footer */}
        <Footer
          companyName="Umer Ahmad Communications"
          year={2023}
          address="19 H2 - Abdul Haque Rd, Phase 2, Johar Town, Lahore, Pakistan"
          phone="+92-42-35833800"
          email="info@uac.com"
        />
      </div>
    </Router>
  );
};

export default App;
