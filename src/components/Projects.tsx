import ProjectCard from "./Card";

const Projects = () => {
  const projects = [
    {
      name: "Portfolio Website",
      img: "https://via.placeholder.com/300",
      description: "A personal portfolio website to showcase my skills and projects.",
      tech: ["React", "Tailwind CSS", "Vite"],
      url: "https://github.com/username/portfolio",
    },
    {
      name: "Task Manager",
      img: "https://via.placeholder.com/300",
      description: "A task management app with drag-and-drop features.",
      tech: ["Nest.js", "React", "MongoDB"],
      url: "https://github.com/username/task-manager",
    },
    {
      name: "E-commerce Platform",
      img: "https://via.placeholder.com/300",
      description: "An e-commerce platform with product listing and cart features.",
      tech: ["Next.js", "Tailwind CSS", "Stripe"],
      url: "https://github.com/username/ecommerce-platform",
    },
  ];

  return (
    <section id='projects' className="min-h-screen py-12 bg-white text-zinc-900">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-red-500">Projects</h1>
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              img={project.img}
              description={project.description}
              tech={project.tech}
              url={project.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
