import React from 'react';

const projects = [
  { title: 'Project A', description: 'A web application built with React and Tailwind CSS.', link: '#' },
  { title: 'Project B', description: 'A mobile app developed using React Native.', link: '#' },
  // Add more projects here
];

function Projects() {
  return (
    <section id="projects" className="p-20 bg-secondary text-primary">
      <h2 className="text-3xl font-bold mb-8">My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-lightGray p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
