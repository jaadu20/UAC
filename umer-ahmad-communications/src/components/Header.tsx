import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavLink {
  name: string;
  href: string;
}

interface HeaderProps {
  title: string;
  links: NavLink[];
}

const Header: React.FC<HeaderProps> = ({ title, links }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Track the current route

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 ${
        isScrolled
          ? "bg-gradient-to-r from-blue-800 to-teal-600 shadow-lg"
          : "bg-transparent"
      } text-white transition-all duration-300`}
    >
      <div className="container mx-auto p-2 md:p-3 flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center mb-2 md:mb-0">
          <img
            src="/images/logo.png"
            alt="Company Logo"
            className="h-14 w-14 md:h-20 md:w-20 mr-2"
          />
          <Link
            to="/"
            className="text-lg md:text-xl font-bold"
            onClick={(e) => {
              // Prevent default behavior if already on the home page
              if (location.pathname === "/") {
                e.preventDefault();
              }
            }}
          >
            {title}
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex-grow flex justify-center mb-2 md:mb-0">
          <ul className="flex flex-wrap justify-center space-x-4 md:space-x-8">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.href}
                  className={`hover:text-blue-200 transition duration-300 text-sm md:text-base ${
                    location.pathname === link.href ? "font-bold underline" : ""
                  }`}
                  onClick={(e) => {
                    // Prevent default behavior if already on the same page
                    if (location.pathname === link.href) {
                      e.preventDefault();
                    }
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Schedule a Call Button */}
        <div
          className={`${isScrolled ? "hidden md:flex" : "flex"} items-center`}
        >
          <Link
            to="/contact"
            className="bg-transparent border border-white text-white px-3 py-1 md:px-4 md:py-2 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300 flex items-center space-x-2 text-sm md:text-base"
            onClick={(e) => {
              // Prevent default behavior if already on the contact page
              if (location.pathname === "/contact") {
                e.preventDefault();
              }
            }}
          >
            <span>Schedule a Call</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 md:h-4 md:w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
