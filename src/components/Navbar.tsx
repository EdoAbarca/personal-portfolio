import { useState } from "react";
import { Icon } from '@iconify-icon/react';

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
              <Icon icon="ic:outline-home" className="h-4 w-4 mr-1" />
              Home
            </a>
            <a
              href="#"
              className="flex items-center rounded-2xl px-2 py-1 text-gray-700 hover:bg-blue-600 hover:text-white transition ease-in-out duration-500"
            >
              <Icon icon="mynaui:info-circle" className="h-4 w-4 mr-1" />
              About
            </a>
            <a
              href="#"
              className="flex items-center rounded-2xl px-2 py-1 text-gray-700 hover:bg-blue-600 hover:text-white transition ease-in-out duration-500"
            >
              <Icon icon="ri:tools-fill" className="h-4 w-4 mr-1" />
              Services
            </a>
          </div>

          <div className="hidden md:flex items-center">
          <a
              href="#"
              className="flex items-center rounded-2xl px-2 py-1 text-gray-700 hover:bg-blue-600 hover:text-white transition ease-in-out duration-300"
            >
              <Icon icon="lucide:contact-round" className="h-4 w-4 mr-1" />
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
              <Icon
                icon={isOpen ? "raphael:cross" : "icon-park:hamburger-button"}
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
            <Icon icon="ic:outline-home" className="h-4 w-4 mr-2" />
            Home
          </a>
          <a
            href="#"
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
          >
            <Icon icon="mynaui:info-circle" className="h-4 w-4 mr-2" />
            About
          </a>
          <a
            href="#"
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
          >
            <Icon icon="ri:tools-fill" className="h-4 w-4 mr-2" />
            Services
          </a>
          <a
            href="#"
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
          >
            <Icon icon="lucide:contact-round" className="h-4 w-4 mr-2" />
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
