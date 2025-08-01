"use client";
import { Icon } from '@iconify-icon/react';
import Image from 'next/image';

interface HeroProps {
  heroData: {
    role: string;
    introduction: string;
    metrics: { label: string; value: string }[];
    linktoCV: string;
  };
}

const Hero: React.FC<HeroProps> = ({ heroData }) => {
  return (
    <section id='about' className="container mx-auto px-4 py-16 min-h-screen flex items-center">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-green-700 bg-green-100 
                         rounded-full shadow-sm">
            <Icon icon="ic:round-check" className="h-4 w-4 mr-2" />
            Available for hire
          </span>

          <div className="space-y-2">
            <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
              Eduardo Abarca
            </h1>
            <h2 className="text-3xl font-semibold text-gray-700">
              Informatics Engineer
            </h2>
            <h3 className="text-xl text-gray-600">
              {heroData.role}
            </h3>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed">
            {heroData.introduction}
          </p>

          <div className="grid grid-cols-2 gap-4 py-4">
            {heroData.metrics.map((metric, idx) => (
              <div className="space-y-1" key={idx}>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                <p className="text-sm text-gray-600">{metric.label}</p>
              </div>
            ))}
          </div>

          <button 
            onClick={() => window.open(heroData.linktoCV)} 
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white 
                     bg-blue-600 hover:bg-blue-700 rounded-full shadow-xl 
                     transition duration-300 ease-in-out"
          >
            <Icon icon="material-symbols:download-rounded" className="h-5 w-5 mr-2" />
            Download CV
          </button>
        </div>

        <div className="relative">
          <div className="aspect-square overflow-hidden rounded-full border-4 border-gray-100 shadow-xl">
            <Image 
              src="perfil_of_og.jpg" 
              alt="Eduardo's profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        w-full h-full bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full 
                        opacity-50 blur-xl">
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
