import React from 'react';
import { projects } from '../data/portfolioData';
import ProjectCard from '../components/ui/ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-heading mb-4">Projects Showcase</h2>
          <p className="text-body max-w-2xl mx-auto">Beberapa proyek utama yang telah saya kerjakan dengan fokus pada efisiensi dan performa yang tinggi.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
