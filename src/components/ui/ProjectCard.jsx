import React from 'react';
import { ExternalLink, Car, Library, Bot, Code } from 'lucide-react';

const iconMap = {
  car: Car,
  library: Library,
  bot: Bot,
  default: Code,
};

const ProjectCard = ({ project }) => {
  const IconComponent = iconMap[project.icon] || iconMap.default;

  return (
    <div className="group flex flex-col bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden p-6 relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="font-bold text-xl text-heading mb-1">{project.title}</h3>
          <span className="text-sm font-medium text-accent">{project.type}</span>
        </div>
        <div className="p-3 bg-slate-50 text-slate-500 rounded-lg group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
          <IconComponent size={24} />
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
  );
};

export default ProjectCard;
