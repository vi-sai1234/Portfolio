
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <AnimatedSection>
        <h2 className="text-3xl font-bold text-gray-100 mb-12 relative inline-block">
          Skills
          <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-cyan-400"></span>
        </h2>
        <div className="space-y-8">
          {SKILLS.map((category) => (
            <div key={category.title}>
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="bg-gray-800 border border-gray-700 text-gray-300 px-4 py-2 rounded-md
                               transition-all duration-300 hover:bg-cyan-500/10 hover:text-cyan-300 hover:border-cyan-400"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Skills;
