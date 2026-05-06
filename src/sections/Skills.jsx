import React from 'react';
import { skills } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-heading mb-4">Skills & Technologies</h2>
          <p className="text-body max-w-2xl mx-auto">Tumpukan teknologi dan alat yang saya gunakan untuk membangun solusi *software* yang tangguh.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-secondary p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-heading mb-4 text-center md:text-left">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {skillGroup.items.map((item, idx) => (
                  <span key={idx} className="bg-white border border-slate-200 text-body px-3 py-1.5 rounded-md text-sm font-medium shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
