
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <AnimatedSection>
        <h2 className="text-3xl font-bold text-gray-100 mb-12 relative inline-block">
          Projects
          <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-cyan-400"></span>
        </h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 flex flex-col
                         transition-all duration-300 hover:shadow-cyan-500/10 hover:shadow-lg hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">{project.title}</h3>
              <ul className="space-y-2 list-disc list-inside text-gray-400 flex-grow">
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-gray-700 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Projects;
