import React from 'react';

const skills = [
  { name: 'Python', icon: '🐍' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'React', icon: '⚛️' },
  { name: 'Tailwind CSS', icon: '💨' },
  // Add more skills here
];

function Knowledge() {
  return (
    <section id="knowledge" className="p-20 bg-secondary text-primary">
      <h2 className="text-3xl font-bold mb-8">Knowledge</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="bg-lightGray p-6 rounded-lg flex flex-col items-center">
            <div className="text-4xl mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Knowledge;
