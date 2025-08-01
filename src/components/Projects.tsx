import ProjectCard from "./Card";

export interface ProjectProps {
  name: string;
  img: string;
  description: string;
  tech: string[];
  githubUrl: string;
  demoUrl: string;
}

interface ProjectsProps {
  projectData: ProjectProps[];
}

const Projects = ({ projectData }: ProjectsProps) => {
  return (
    <section id='projects' className="min-h-screen py-12 bg-white text-zinc-900">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Projects</h1>
        <div className="grid grid-cols-1 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              img={project.img}
              description={project.description}
              tech={project.tech}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
