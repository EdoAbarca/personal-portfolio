import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  faHome,
  faInfoCircle,
  faTools,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white z-10 shadow-lg">
      {/* Main Navbar Container */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold">Logo</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center shadow-sm border rounded-2xl">
            <a
              href="#"
              className="flex items-center rounded-2xl px-2 py-1 text-gray-700 hover:bg-blue-600 hover:text-white transition ease-in-out duration-500"
            >
              <FontAwesomeIcon icon={faHome} className="h-4 w-4 mr-1" />
              Home
            </a>
            <a
              href="#"
              className="flex items-center rounded-2xl px-2 py-1 text-gray-700 hover:bg-blue-600 hover:text-white transition ease-in-out duration-500"
            >
              <FontAwesomeIcon icon={faInfoCircle} className="h-4 w-4 mr-1" />
              About
            </a>
            <a
              href="#"
              className="flex items-center rounded-2xl px-2 py-1 text-gray-700 hover:bg-blue-600 hover:text-white transition ease-in-out duration-500"
            >
              <FontAwesomeIcon icon={faTools} className="h-4 w-4 mr-1" />
              Services
            </a>
          </div>

          <div className="hidden md:flex items-center">
          <a
              href="#"
              className="flex items-center rounded-2xl px-2 py-1 text-gray-700 hover:bg-blue-600 hover:text-white transition ease-in-out duration-300"
            >
              <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 mr-1" />
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl"
              aria-expanded={isOpen}
            >
              <FontAwesomeIcon
                icon={isOpen ? faXmark : faBars}
                className="h-6 w-6"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute right-4 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black/5 origin-top-right transition-transform duration-200 ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
        } md:hidden`}
      >
        <div className="py-1">
          <a
            href="#"
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
          >
            <FontAwesomeIcon icon={faHome} className="h-4 w-4 mr-2" />
            Home
          </a>
          <a
            href="#"
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
          >
            <FontAwesomeIcon icon={faInfoCircle} className="h-4 w-4 mr-2" />
            About
          </a>
          <a
            href="#"
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
          >
            <FontAwesomeIcon icon={faTools} className="h-4 w-4 mr-2" />
            Services
          </a>
          <a
            href="#"
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
          >
            <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 mr-2" />
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
