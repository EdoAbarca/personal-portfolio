import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faDownload } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-16 min-h-screen flex items-center">
      {/* Main grid container */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left column - Text content */}
        <div className="space-y-6">
          {/* Available for work badge */}
          <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-green-700 bg-green-100 
                         rounded-full shadow-sm">
            <FontAwesomeIcon icon={faCheck} className="h-4 w-4 mr-2" />
            Available for hire
          </span>

          {/* Name and titles */}
          <div className="space-y-2">
            <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
              Eduardo Abarca
            </h1>
            <h2 className="text-3xl font-semibold text-gray-700">
              Informatics Engineer
            </h2>
            <h3 className="text-xl text-gray-600">
              FullStack Web Developer
            </h3>
          </div>

          {/* Introduction */}
          <p className="text-lg text-gray-600 leading-relaxed">
            Passionate about creating impactful web solutions that combine elegant design 
            with robust functionality. With expertise in both front-end and back-end development, 
            I transform complex problems into intuitive, user-friendly applications. 
            Let's work together to bring your digital vision to life.
          </p>

          {/* Key metrics */}
          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="space-y-1">
              <p className="text-2xl font-bold text-gray-900">3+ Years</p>
              <p className="text-sm text-gray-600">Development Experience</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-gray-900">20+</p>
              <p className="text-sm text-gray-600">Projects Completed</p>
            </div>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => window.open('/path-to-your-cv.pdf')}
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white 
                     bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-xl 
                     transition duration-150 ease-in-out"
          >
            <FontAwesomeIcon icon={faDownload} className="h-5 w-5 mr-2" />
            Download CV
          </button>
        </div>

        {/* Right column - Image */}
        <div className="relative">
          <div className="aspect-square overflow-hidden rounded-full border-4 border-gray-100 shadow-xl">
            <img 
              src="764164_de03_5.jpg" 
              alt="Eduardo's profile" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative background element */}
          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        w-[110%] h-[110%] bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full 
                        opacity-50 blur-xl">
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;