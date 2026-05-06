import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="group flex flex-col bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="aspect-video bg-slate-100 flex items-center justify-center relative overflow-hidden">
        {project.image ? (
          <img src={project.image} alt={project.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <span className="text-slate-400 font-medium">No Image</span>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-bold text-xl text-heading mb-1">{project.title}</h3>
            <span className="text-sm font-medium text-accent">{project.type}</span>
          </div>
        </div>
        <p className="text-body mb-6 flex-grow text-sm leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span key={index} className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full font-medium">
              {tag}
            </span>
          ))}
        </div>
        <div className="pt-4 border-t border-slate-100 mt-auto">
          <a href={project.repoLink} className="inline-flex items-center text-sm font-semibold text-primary hover:text-blue-800 transition-colors">
            Lihat Repositori <ExternalLink size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
