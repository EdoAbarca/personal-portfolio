import React from 'react';

const experiences = [
  { role: 'Full-Stack Developer', company: 'Company A', time: 'Jan 2023 - Present', description: 'Developed and maintained web applications.' },
  { role: 'Software Engineer', company: 'Company B', time: 'Jul 2021 - Dec 2022', description: 'Worked on backend systems and APIs.' },
];

const education = [
  { degree: 'B.Sc. Computer Science', institution: 'University X', time: '2017 - 2021' },
];

function Resume() {
  return (
    <section id="resume" className="p-20 bg-lightGray text-primary">
      <h2 className="text-3xl font-bold mb-8">Resume</h2>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Experience</h3>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-6">
            <h4 className="text-xl font-semibold">{exp.role}</h4>
            <p className="text-secondary">{exp.company} | {exp.time}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">Education</h3>
        {education.map((edu, index) => (
          <div key={index} className="mb-6">
            <h4 className="text-xl font-semibold">{edu.degree}</h4>
            <p className="text-secondary">{edu.institution} | {edu.time}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Resume;
