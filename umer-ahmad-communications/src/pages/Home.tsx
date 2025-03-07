import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";

const Home: React.FC = () => {
  const location = useLocation();

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll to section if hash is present in URL
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About Us", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Umer Ahmad Communications" links={navLinks} />
      {/* Main Content */}
      <main className="flex-grow">
        {/* Home Section */}
        <section
          id="home"
          className="relative h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/images/home-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Innovative Solutions for{" "}
              <span className="text-blue-400">Lead Generation</span>
            </h1>
            <p className="text-lg md:text-2xl mb-8 max-w-3xl">
              We are offering a complete range of BPO solutions rooted in our
              expertise and knowledge of customer behavior and the business
              industry.
            </p>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-3 md:px-10 md:py-4 rounded-lg hover:bg-blue-700 transition duration-300 text-lg md:text-xl flex items-center space-x-2"
            >
              <span>Get a Quote</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </a>
          </div>
        </section>

        {/* About Us Section */}
        <section
          id="about"
          className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-blue-100"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Image on the Left */}
              <div className="w-full md:w-1/2">
                <img
                  src="/images/about-image.jpg" // Replace with your image path
                  alt="About Us"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Text on the Right */}
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-8">
                  About <span className="text-blue-600">UAC</span>
                </h2>
                <p className="text-lg md:text-xl text-center md:text-left mb-8 max-w-3xl">
                  Umer Ahmad Communications (UAC) is leading and evolving the
                  traditional way organizations deal with their consumers.
                  Established in 2014, we have multiple years of experience in
                  providing services to clients across various sectors.
                </p>
                <div className="text-center md:text-left">
                  <a
                    href="#services"
                    className="bg-blue-600 text-white px-8 py-3 md:px-10 md:py-4 rounded-lg hover:bg-blue-700 transition duration-300 text-lg md:text-xl flex items-center space-x-2 mx-auto md:mx-0"
                  >
                    <span>Learn More</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
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
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Services We <span className="text-blue-600">Provide</span>
            </h2>
            <p className="text-lg md:text-xl text-center mb-8 max-w-3xl mx-auto">
              We bring you award-winning products, advanced UI/UX, and
              world-class web and mobile platforms that bridge the gap between
              creativity and technology.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Lead Generation Card */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 hover:bg-gradient-to-br hover:from-blue-100 hover:to-blue-200">
                <div className="bg-blue-600 text-white p-4 rounded-full w-12 h-12 flex items-center justify-center mb-4">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Lead Generation</h3>
                <p className="text-gray-700">
                  Identifying and cultivating potential customers for your
                  business's products or services.
                </p>
              </div>

              {/* Web Development Card */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 hover:bg-gradient-to-br hover:from-green-100 hover:to-green-200">
                <div className="bg-green-600 text-white p-4 rounded-full w-12 h-12 flex items-center justify-center mb-4">
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
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Web Development</h3>
                <p className="text-gray-700">
                  Building responsive and user-friendly websites tailored to
                  your business needs.
                </p>
              </div>

              {/* Call Center Card */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 hover:bg-gradient-to-br hover:from-purple-100 hover:to-purple-200">
                <div className="bg-purple-600 text-white p-4 rounded-full w-12 h-12 flex items-center justify-center mb-4">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Call Center</h3>
                <p className="text-gray-700">
                  Providing exceptional customer support and technical
                  assistance through our call center services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section id="gallery" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Our <span className="text-blue-600">Gallery</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                <img
                  src="/images/gallery-1.jpg"
                  alt="Gallery Image 1"
                  className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                <img
                  src="/images/gallery-2.jpg"
                  alt="Gallery Image 2"
                  className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                <img
                  src="/images/gallery-3.jpg"
                  alt="Gallery Image 3"
                  className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics Section */}
        <section
          id="success"
          className="relative bg-cover bg-center py-16 md:py-32"
          style={{ backgroundImage: "url('/images/success-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Our Success Over the <span className="text-blue-400">Years</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-5xl font-bold mb-4">300+</h3>
                <p className="text-xl">Employees</p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-5xl font-bold mb-4">1575+</h3>
                <p className="text-xl">Total Clients Served</p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-5xl font-bold mb-4">633K+</h3>
                <p className="text-xl">Upwork Hours</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
