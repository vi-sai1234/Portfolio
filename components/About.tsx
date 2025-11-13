
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { PERSONAL_INFO, EDUCATION } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <AnimatedSection>
        <h2 className="text-3xl font-bold text-gray-100 mb-8 relative inline-block">
          About Me
          <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-cyan-400"></span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 text-lg text-gray-400">
            <p>{PERSONAL_INFO.about}</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold text-cyan-400 mb-4">Education</h3>
            <p className="font-semibold text-gray-200">{EDUCATION.degree}</p>
            <p className="text-gray-400">{EDUCATION.college}</p>
            <p className="text-gray-500 mt-2">{EDUCATION.duration}</p>
            <p className="text-gray-500">CGPA: {EDUCATION.cgpa}</p>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default About;
