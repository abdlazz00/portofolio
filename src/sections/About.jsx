import React from 'react';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-heading mb-8">About Me</h2>
        <p className="text-lg text-body leading-relaxed">
          {personalInfo.shortAbout}
        </p>
      </div>
    </section>
  );
};

export default About;
