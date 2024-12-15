import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="w-full max-w-screen-xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center">
            <span className="text-2xl md:text-3xl text-white font-bold relative">
              eBazaar
              <span className="absolute bottom-1 left-0 w-full h-1 bg-blue-500 rounded-md"></span>
            </span>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center md:justify-end gap-4 mt-4 md:mt-0">
              {["About", "Privacy Policy", "Licensing", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="#"
                      className="hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="text-center text-sm">
          © {currentYear} eBazaar. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
