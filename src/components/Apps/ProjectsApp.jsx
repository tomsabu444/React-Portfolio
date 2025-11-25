import React from 'react';
import { Project_list_1 } from '../../assets/Project-list';
import { ExternalLink } from 'lucide-react';

const ProjectsApp = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-yellow-400 mb-6 border-b border-yellow-500/30 pb-2">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Project_list_1.map((project, index) => (
          <a 
            key={index} 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-yellow-400/50 transition-all hover:shadow-lg hover:shadow-yellow-400/10"
          >
            <div className="h-48 overflow-hidden relative">
              <img 
                src={project.src} 
                alt={project.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <ExternalLink className="text-white" size={32} />
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                {project.blog_title}
              </h3>
              <p className="text-sm text-gray-400 line-clamp-3">
                {project.blog_text}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectsApp;
