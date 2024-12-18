import { Icon } from '@iconify-icon/react';

const Knowledge = () => {
  // Expanded list of technologies with their icons and names
  const knowledgeList = [
    {
      "icon": "devicon:python",
      "width": 48,
      "height": 48,
      "name": "Python"
    },
    {
      "icon": "devicon:javascript",
      "width": 48,
      "height": 48,
      "name": "JavaScript"
    },
    {
      "icon": "devicon:typescript",
      "width": 48,
      "height": 48,
      "name": "TypeScript"
    },
    {
      "icon": "devicon:java",
      "width": 48,
      "height": 48,
      "name": "Java"
    },
    {
      "icon": "devicon:php",
      "width": 48,
      "height": 48,
      "name": "PHP"
    },
    {
      "icon": "devicon:react",
      "width": 48,
      "height": 48,
      "name": "React"
    },
    {
      "icon": "devicon:nextjs",
      "width": 48,
      "height": 48,
      "name": "Next.js"
    },
    {
      "icon": "devicon:tailwindcss",
      "width": 48,
      "height": 48,
      "name": "Tailwind CSS"
    },
    {
      "icon": "devicon:djangorest",
      "width": 48,
      "height": 48,
      "name": "Django"
    },
    {
      "icon": "devicon:nestjs",
      "width": 48,
      "height": 48,
      "name": "Nest.js"
    },
    {
      "icon": "devicon:spring",
      "width": 48,
      "height": 48,
      "name": "Spring Boot"
    },
    {
      "icon": "devicon:laravel",
      "width": 48,
      "height": 48,
      "name": "Laravel"
    },
    {
      "icon": "devicon:azure",
      "width": 48,
      "height": 48,
      "name": "Azure"
    },
    {
      "icon": "devicon:digitalocean",
      "width": 48,
      "height": 48,
      "name": "Digitalocean"
    },
    {
      "icon": "devicon:heroku",
      "width": 48,
      "height": 48,
      "name": "Heroku"
    },
    {
      "icon": "devicon:docker",
      "width": 48,
      "height": 48,
      "name": "Docker"
    },
    {
      "icon": "devicon:vitejs",
      "width": 48,
      "height": 48,
      "name": "Vite"
    },
    {
      "icon": "devicon:figma",
      "width": 48,
      "height": 48,
      "name": "Figma"
    },
    {
      "icon": "devicon:prisma",
      "width": 48,
      "height": 48,
      "name": "Prisma"
    },
    {
      "icon": "devicon:nodejs",
      "width": 48,
      "height": 48,
      "name": "Node.js"
    },
    {
      "icon": "devicon:git",
      "width": 48,
      "height": 48,
      "name": "Git"
    },
    {
      "icon": "devicon:github",
      "width": 48,
      "height": 48,
      "name": "GitHub"
    },
    {
      "icon": "devicon:postgresql",
      "width": 48,
      "height": 48,
      "name": "PostgreSQL"
    },
    {
      "icon": "devicon:mongodb",
      "width": 48,
      "height": 48,
      "name": "MongoDB"
    }
  ];

  return (
    <section id='knowledge' className="container mx-auto px-4 py-16">
      {/* Section header with title and description */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Knowledge</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          This is my stack of tools, technologies and frameworks.
        </p>
      </div>

      {/* Responsive grid container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {/* Map through the knowledge list to create cards */}
        {knowledgeList.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm 
                     hover:shadow-md transition-shadow duration-300 border border-gray-100"
          >
            <Icon
              icon={tech.icon}
              width={tech.width}
              height={tech.height}
              className="mb-3"
            />
            <span className="text-sm font-medium text-gray-700">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Knowledge;