
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 text-center">
      <AnimatedSection>
        <h2 className="text-3xl font-bold text-gray-100 mb-4">Get In Touch</h2>
        <p className="max-w-xl mx-auto text-gray-400 mb-8">
          I'm currently open to new opportunities and would love to hear from you. Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="inline-block bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold py-3 px-8 rounded
                     transition-all duration-300 hover:bg-cyan-400/10 hover:scale-105"
        >
          Say Hello
        </a>
      </AnimatedSection>
    </section>
  );
};

export default Contact;
