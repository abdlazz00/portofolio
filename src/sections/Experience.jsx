import React from 'react';
import { experiences } from '../data/portfolioData';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-heading mb-12 text-center">Experience</h2>
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 group-hover:bg-primary text-slate-500 group-hover:text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow transition-colors z-10">
                <Briefcase size={18} />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-lg border border-slate-200 bg-white shadow-sm group-hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-heading">{exp.role}</h3>
                  <span className="text-sm font-medium text-accent bg-blue-50 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">{exp.period}</span>
                </div>
                <div className="text-primary font-medium mb-3">{exp.company}</div>
                <p className="text-body text-sm leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
