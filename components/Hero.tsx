
import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';
import GithubIcon from './icons/GithubIcon';
import EmailIcon from './icons/EmailIcon';
import PhoneIcon from './icons/PhoneIcon';

const Hero: React.FC = () => {
  const [typedTitle, setTypedTitle] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    // FIX: Corrected setTimeout typing for browser environment and prevented potential runtime error.
    if (isTyping && typedTitle.length < PERSONAL_INFO.title.length) {
      const timeout = setTimeout(() => {
        setTypedTitle(PERSONAL_INFO.title.slice(0, typedTitle.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else if (typedTitle.length === PERSONAL_INFO.title.length) {
      setIsTyping(false);
    }
  }, [typedTitle, isTyping]);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-start pt-20">
      <div className="space-y-4">
        <p className="text-cyan-400 text-lg md:text-xl font-mono animate-fade-in-down" style={{animationDelay: '100ms'}}>
          Hi, my name is
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-100 animate-fade-in-down" style={{animationDelay: '200ms'}}>
          {PERSONAL_INFO.name}.
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-400 animate-fade-in-down" style={{animationDelay: '300ms'}}>
          {typedTitle}
          <span className="animate-pulse">|</span>
        </h2>
        <p className="max-w-xl text-gray-400 md:text-lg animate-fade-in-up" style={{animationDelay: '400ms'}}>
          I build things for the web. I'm a full-stack developer specializing in creating exceptional digital experiences.
        </p>
        <div className="flex items-center space-x-6 pt-4 animate-fade-in-up" style={{animationDelay: '500ms'}}>
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-transform duration-300 hover:scale-110">
            <GithubIcon className="w-7 h-7" />
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="text-gray-400 hover:text-cyan-400 transition-transform duration-300 hover:scale-110">
            <EmailIcon className="w-7 h-7" />
          </a>
          <a href={`tel:${PERSONAL_INFO.phone}`} className="text-gray-400 hover:text-cyan-400 transition-transform duration-300 hover:scale-110">
            <PhoneIcon className="w-7 h-7" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
