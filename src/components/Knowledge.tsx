import { Icon } from '@iconify-icon/react';

interface KnowledgeItem {
  icon: string;
  width: number;
  height: number;
  name: string;
}

interface KnowledgeProps {
  knowledgeData: KnowledgeItem[];
}

const Knowledge: React.FC<KnowledgeProps> = ({ knowledgeData }) => {
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
        {/* Map through the knowledgeData prop to create cards */}
        {knowledgeData.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm 
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
