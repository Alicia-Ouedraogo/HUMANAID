import React from 'react';
import Section from './Section';
import { PROJECTS } from '../constants';
import { Github } from 'lucide-react';

const Projects = () => {
  return (
    <Section id="projects" className="bg-slate-50 dark:bg-slate-900/50">
      <h2 className="text-3xl font-bold font-heading text-center mb-12 text-slate-900 dark:text-white">
        Projets Réalisés
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                {project.links.repo && (
                  <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white hover:text-gold-600 dark:hover:text-gold-400 bg-slate-100 dark:bg-slate-700/50 px-4 py-2 rounded-lg w-full justify-center transition-colors">
                    <Github size={18} /> Voir le Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;