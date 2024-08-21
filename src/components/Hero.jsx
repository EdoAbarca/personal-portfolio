import React from 'react';

function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-primary text-highlight flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Hi, I'm Eduardo</h1>
        <p className="mt-4 text-xl">Full-Stack Developer & Software Engineer</p>
        <a href="#projects" className="mt-8 inline-block bg-accent text-primary py-3 px-6 rounded-lg hover:bg-highlight transition duration-300">
          View My Work
        </a>
      </div>
    </section>
  );
}

export default Hero;
