import React from 'react';

function Header() {
  return (
    <header className="bg-secondary text-primary py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Eduardo's Portfolio</h1>
        <ul className="flex space-x-6">
          <li><a href="#hero" className="hover:text-accent transition">Home</a></li>
          <li><a href="#about" className="hover:text-accent transition">About</a></li>
          <li><a href="#projects" className="hover:text-accent transition">Projects</a></li>
          <li><a href="#resume" className="hover:text-accent transition">Resume</a></li>
          <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
