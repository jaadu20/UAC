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
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
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

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Company Logo"
              className="h-14 w-14 md:h-20 md:w-20 mr-2"
            />
            <Link
              to="/"
              className="text-lg md:text-xl font-bold"
              onClick={(e) => {
                if (location.pathname === "/") {
                  e.preventDefault();
                }
              }}
            >
              {title}
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex md:flex-grow md:justify-center md:mb-0">
          <ul className="flex space-x-4 md:space-x-8">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.href}
                  className={`hover:text-blue-200 transition duration-300 text-sm md:text-base ${
                    location.pathname === link.href ? "font-bold underline" : ""
                  }`}
                  onClick={(e) => {
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

        {/* Mobile Navigation Links */}
        <nav
          className={`fixed top-16 mt-2 left-0 h-full w-40 bg-gradient-to-r from-blue-800 to-teal-600 text-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div className="flex justify-end p-4">
            <button className="p-2 focus:outline-none" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col p-4">
            {links.map((link, index) => (
              <li key={index} className="my-2">
                <Link
                  to={link.href}
                  className={`hover:text-blue-200 transition duration-300 text-sm ${
                    location.pathname === link.href ? "font-bold underline" : ""
                  }`}
                  onClick={(e) => {
                    if (location.pathname === link.href) {
                      e.preventDefault();
                    }
                    closeMenu(); // Close the mobile menu when a link is clicked
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Schedule a Call Button (Hidden on Mobile) */}
        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className="bg-transparent border border-white text-white px-3 py-1 md:px-4 md:py-2 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300 flex items-center space-x-2 text-sm md:text-base"
            onClick={(e) => {
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
