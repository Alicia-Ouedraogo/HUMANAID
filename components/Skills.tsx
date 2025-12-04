import React from 'react';
import Section from './Section';
import { SKILLS } from '../constants';

const Skills = () => {
  return (
    <Section id="skills">
      <h2 className="text-3xl font-bold font-heading text-center mb-4 text-slate-900 dark:text-white">
        Compétences
      </h2>
      <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
        Un mélange de savoir-faire technique et de soft skills développés au cours de mes projets académiques et professionnels.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS.map((category, idx) => (
          <div 
            key={idx} 
            className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700"
          >
            <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">
              {category.title}
            </h3>
            <ul className="space-y-3">
              {category.skills.map((skill) => (
                <li key={skill} className="flex items-center text-slate-600 dark:text-slate-300">
                  <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
