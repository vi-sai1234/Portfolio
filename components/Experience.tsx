
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <AnimatedSection>
        <h2 className="text-3xl font-bold text-gray-100 mb-12 relative inline-block">
          Experience
          <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-cyan-400"></span>
        </h2>
        <div className="relative border-l-2 border-gray-700 pl-8">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="mb-12 last:mb-0">
              <div className="absolute w-4 h-4 bg-cyan-400 rounded-full -left-2.5 border-4 border-gray-900"></div>
              <p className="text-sm text-gray-500">{exp.duration}</p>
              <h3 className="text-xl font-bold text-cyan-400 mt-1">{exp.role}</h3>
              <p className="text-lg font-semibold text-gray-300">
                {exp.company} <span className="text-sm text-gray-500">({exp.location})</span>
              </p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-400">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Experience;
