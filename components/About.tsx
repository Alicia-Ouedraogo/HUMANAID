import React from 'react';
import Section from './Section';
import { PERSONAL_INFO } from '../constants';
import { Award, Code, Users } from 'lucide-react';

const About = () => {
  return (
    <Section id="about" className="bg-white dark:bg-slate-800/50">
      <h2 className="text-3xl font-bold font-heading text-center mb-12 text-slate-900 dark:text-white">
        À Propos de moi
      </h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              Je m'appelle <strong className="text-gold-600 dark:text-gold-400">{PERSONAL_INFO.shortName}</strong>. 
              {PERSONAL_INFO.bio.short}
            </p>
            <p>
              {PERSONAL_INFO.bio.long}
            </p>
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Mes Valeurs</h3>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.bio.values.map((val) => (
                  <span key={val} className="px-4 py-1 bg-gold-100 dark:bg-gold-900/20 text-gold-700 dark:text-gold-400 rounded-full text-sm font-medium">
                    {val}
                  </span>
                ))}
              </div>
            </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
           <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
             <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                <Code size={24} />
             </div>
             <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Tech & Innovation</h3>
             <p className="text-slate-600 dark:text-slate-400 text-sm">
               Expertise en développement Web/Mobile et passionnée par les défis du Big Data et de l'IA.
             </p>
           </div>
           
           <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
             <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400">
                <Users size={24} />
             </div>
             <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Leadership Associatif</h3>
             <p className="text-slate-600 dark:text-slate-400 text-sm">
               Présidente de Lise Group et membre active d'EPIC Leader Club, je crois au pouvoir de la communauté.
             </p>
           </div>

           <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
             <div className="w-12 h-12 bg-gold-100 dark:bg-gold-900/30 rounded-lg flex items-center justify-center mb-4 text-gold-600 dark:text-gold-400">
                <Award size={24} />
             </div>
             <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Vision & Ambition</h3>
             <p className="text-slate-600 dark:text-slate-400 text-sm">
               Mon objectif est d'impacter positivement mon environnement à travers des projets concrets et durables.
             </p>
           </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
