"use client";
import { useState, useEffect } from "react";
import { Icon } from '@iconify-icon/react';

const menuItems = [ //Nav options
  { 
    name: 'About', //Introduction about me
    href: '#about', 
    icon: 'mynaui:info-circle' 
  },
  { 
    name: 'Knowledge', // Learned and used tools, tech and frameworks
    href: '#knowledge', 
    icon: 'tabler:books' 
  },
  { 
    name: 'Projects', // Highlight projects I've made so far
    href: '#projects', 
    icon: 'dashicons:portfolio' 
  },
  { 
    name: 'Contact', // Communication channels
    href: '#contact', 
    icon: 'lucide:contact-round' 
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); //is nav open hook
  const [activeSection, setActiveSection] = useState(''); //page section hook

  useEffect(() => {
    const sections = document.querySelectorAll('section'); //Ids are set in section tag
    
    const handleScroll = () => {
      let current = ''; //Default should be 'about', gotta check that
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id') || '';
        }
      });
      setActiveSection(current); //set selected/scrolled/current section
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent">
      <div className="relative container mx-auto px-4 flex items-center h-16">
        {/* Mobile Menu Button */}
        <div className="absolute right-4 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 bg-white/30 backdrop-blur-md rounded-full shadow-lg focus:outline-none border"
            aria-expanded={isOpen}
          >
            <Icon
              icon={isOpen ? "raphael:cross" : "icon-park:hamburger-button"}
              className="h-4 w-6"
            />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-2 bg-white/30 backdrop-blur-md rounded-full shadow-xl p-1 mx-auto border">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`flex items-center rounded-full px-3 py-1 transition ease-in-out duration-500 ${
                activeSection === item.href.replace("#", "")
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-blue-600 hover:text-white"
              }`}
            >
              <Icon icon={item.icon} className="h-4 w-4 mr-1" />
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute right-4 mt-2 w-56 bg-white/30 backdrop-blur-md rounded-lg shadow-lg transition-all duration-300 ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
        } md:hidden`}
      >
        <div className="py-1">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`px-4 py-2 flex items-center transition-all duration-300 ${
                activeSection === item.href.replace("#", "")
                  ? "bg-blue-600 text-white"
                  : "text-gray-700"
              }`}
            >
              <Icon icon={item.icon} className="h-4 w-4 mr-2" />
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
