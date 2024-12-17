const ProjectCard = ({ name, img, description, tech, url }) => {
    return (
      <div className="bg-zinc-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex overflow-hidden">
        {/* Image Section */}
        <div className="w-1/3">
          <img
            src={img}
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>
  
        {/* Content Section */}
        <div className="w-2/3 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2 text-red-500">{name}</h2>
            <p className="text-zinc-600 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {tech.map((item, index) => (
                <span
                  key={index}
                  className="bg-red-100 text-red-600 text-xs py-1 px-2 rounded"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-600 transition-colors duration-200 font-semibold"
            >
              View Code →
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  