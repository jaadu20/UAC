import React from "react";
import { Link } from "react-router-dom";

interface FooterProps {
  companyName: string;
  year: number;
  address: string;
  phone: string;
  email: string;
}

const Footer: React.FC<FooterProps> = ({
  companyName,
  year,
  address,
  phone,
  email,
}) => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-teal-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/#home"
                  className="hover:text-blue-200 text-sm md:text-base"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#about" // Anchor link for About Us
                  className="hover:text-blue-200 text-sm md:text-base"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services" // Anchor link for Services
                  className="hover:text-blue-200 text-sm md:text-base"
                >
                  Services
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-200 text-sm md:text-base"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Head Office</h3>
            <p className="text-sm md:text-base">{address}</p>
            <p className="text-sm md:text-base">{phone}</p>
            <p className="text-sm md:text-base">{email}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">About Company</h3>
            <p className="text-sm md:text-base">
              {companyName} is leading and evolving the traditional way
              organizations deal with their consumers.
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm md:text-base">
            &copy; {year} – {companyName}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
