import React from 'react';
import Section from './Section';
import { EXPERIENCE, EDUCATION } from '../constants';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <Section id="experience">
      <div className="grid lg:grid-cols-2 gap-16">
        
        {/* Work & Leadership */}
        <div>
          <h2 className="flex items-center gap-3 text-2xl font-bold font-heading mb-8 text-slate-900 dark:text-white">
            <Briefcase className="text-gold-500" /> Expériences & Leadership
          </h2>
          <div className="space-y-8 border-l-2 border-slate-200 dark:border-slate-700 ml-3 pl-8 relative">
            {EXPERIENCE.map((exp) => (
              <div key={exp.id} className="relative">
                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white dark:bg-slate-800 border-4 border-gold-500"></span>
                <div className="mb-1 text-sm text-gold-600 dark:text-gold-400 font-semibold uppercase tracking-wider flex items-center gap-2">
                  <Calendar size={14} /> {exp.period}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                <h4 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-2">{exp.company}</h4>
                <span className={`inline-block mb-3 px-2 py-1 text-xs rounded border ${exp.type === 'leadership' ? 'border-purple-200 text-purple-700 bg-purple-50 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800' : 'border-blue-200 text-blue-700 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800'}`}>
                    {exp.type === 'leadership' ? 'Leadership' : 'Professionnel'}
                </span>
                <p className="text-slate-600 dark:text-slate-400">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="flex items-center gap-3 text-2xl font-bold font-heading mb-8 text-slate-900 dark:text-white">
            <GraduationCap className="text-gold-500" /> Formation Académique
          </h2>
          <div className="space-y-8 border-l-2 border-slate-200 dark:border-slate-700 ml-3 pl-8">
             {EDUCATION.map((edu) => (
              <div key={edu.id} className="relative">
                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white dark:bg-slate-800 border-4 border-slate-400 dark:border-slate-600"></span>
                <div className="mb-1 text-sm text-slate-500 dark:text-slate-400 font-medium flex items-center gap-2">
                   <Calendar size={14} /> {edu.period}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                <h4 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-2">{edu.school}</h4>
                {edu.details && (
                  <p className="text-slate-600 dark:text-slate-400 text-sm italic">
                    {edu.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
};

export default Experience;
