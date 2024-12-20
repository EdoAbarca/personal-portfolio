//import Image from 'next/image';

interface ProjectCardProps {
  name: string;
  img: string;
  description: string;
  tech: string[];
  githubUrl: string;
  demoUrl: string;
}

const ProjectCard = ({ name, img, description, tech, githubUrl, demoUrl }: ProjectCardProps) => {
  return (
    <div className="bg-zinc-50 rounded-se-2xl rounded-es-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex overflow-hidden">
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
          <h2 className="text-2xl font-bold mb-2 text-zinc-900">{name}</h2>
          <p className="text-zinc-600 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((item, index) => (
              <span
                key={index}
                className="bg-zinc-100 text-zinc-600 text-xs py-1 px-2 rounded"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-zinc-500 hover:text-zinc-600 transition-colors duration-200 font-semibold ${demoUrl === "#" ? "disabled-link" : ""}`}
          >
            {demoUrl === "#" ? "Demo currently unavailable" : "View Demo →"}
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-600 transition-colors duration-200 font-semibold"
          >
            View Code →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;