"use client";
import { useState, useEffect } from "react";
import { Icon } from '@iconify-icon/react';
import { useRouter } from "next/navigation";

type NavbarProps = {
  currentProfile: "fullstack" | "devops";
};

const profiles = [
  { label: "FullStack", value: "fullstack" },
  { label: "DevOps", value: "devops" }
];

const menuItems = [
  { name: 'About', href: '#about', icon: 'mynaui:info-circle' },
  { name: 'Knowledge', href: '#knowledge', icon: 'tabler:books' },
  { name: 'Projects', href: '#projects', icon: 'dashicons:portfolio' },
  { name: 'Contact', href: '#contact', icon: 'lucide:contact-round' }
];

const Navbar = ({ currentProfile }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const router = useRouter();

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const handleScroll = () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id') || '';
        }
      });
      setActiveSection(current);
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
            className="p-2 bg-white/30 backdrop-blur-md rounded-full shadow-lg focus:outline-none border border-white/20"
            aria-expanded={isOpen}
          >
            <Icon
              icon={isOpen ? "raphael:cross" : "icon-park:hamburger-button"}
              className="h-4 w-6"
            />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-2 bg-white/30 backdrop-blur-md rounded-full shadow-xl p-1 mx-auto border border-white/20">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`flex items-center rounded-full px-3 py-1 transition-all duration-300 ease-in-out ${
                activeSection === item.href.replace("#", "")
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-blue-600 hover:text-white"
              }`}
            >
              <Icon icon={item.icon} className="h-4 w-4 mr-1" />
              {item.name}
            </a>
          ))}

          {/* Profile Toggle - Fixed to match the UI/UX */}
          <div className="flex items-center bg-white/60 rounded-full px-1 py-1 border border-white/20">
            {profiles.map((profile) => (
              <button
                key={profile.value}
                onClick={() => router.push(`/${profile.value}`)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ease-in-out ${
                  currentProfile === profile.value
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-blue-100"
                }`}
              >
                {profile.label}
              </button>
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
                    : "text-gray-700 hover:bg-blue-100"
                }`}
              >
                <Icon icon={item.icon} className="h-4 w-4 mr-2" />
                {item.name}
              </a>
            ))}
          </div>
          <div className="border-t border-white/20 mt-1 pt-2 px-4">
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Profile:
            </label>
            <div className="flex gap-1 bg-white/80 rounded-full p-1 border border-white/20">
              {profiles.map((profile) => (
                <button
                  key={profile.value}
                  onClick={() => {
                    router.push(`/${profile.value}`);
                    setIsOpen(false);
                  }}
                  className={`flex-1 px-2 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                    currentProfile === profile.value
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-blue-100"
                  }`}
                >
                  {profile.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;