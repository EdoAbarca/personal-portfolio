import ProjectCard from "./Card";

const Projects = () => {
  const projects = [
    {
      name: "PoC AI Detector",
      img: "/poc.png",
      description: "An application to detect AI-generated text in file-based evaluation-focused documents.",
      tech: ["React", "Tailwind CSS", "Vite", "Django", "PostgreSQL"],
      githubUrl: "https://github.com/EdoAbarca/PlataformaIA",
      demoUrl: "#"
    },
    {
      name: "Rotativa Myra",
      img: "myra.png",
      description: "An application to calculate employees payments in MyraSalud company, fixed to unattended shifts, holidays, extra hours and licenses.",
      tech: ["Nuxt.js", "Django", "PostgreSQL"],
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      name: "Textifying Speaking",
      img: "txt-spk.webp",
      description: "An application to perform speech-to-text tasks over audio-based files.",
      tech: ["React", "Tailwind CSS", "Django", "Nest.js", "MongoDB"],
      githubUrl: "https://github.com/EdoAbarca/textifying-speaking",
      demoUrl: "#"
    },
  ];

  return (
    <section id='projects' className="min-h-screen py-12 bg-white text-zinc-900">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Projects</h1>
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
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
