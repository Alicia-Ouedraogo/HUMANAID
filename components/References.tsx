import React from 'react';
import Section from './Section';
import { REFERENCES } from '../constants';
import { Quote, Phone } from 'lucide-react';

const References = () => {
  return (
    <Section id="references" className="bg-slate-50 dark:bg-slate-800/50">
      <h2 className="text-3xl font-bold font-heading text-center mb-12 text-slate-900 dark:text-white">
        Références
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {REFERENCES.map((ref) => (
          <div 
            key={ref.id} 
            className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 relative"
          >
            <Quote className="absolute top-6 right-6 text-gold-200 dark:text-slate-700 w-10 h-10" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{ref.name}</h3>
            <p className="text-gold-600 dark:text-gold-400 font-medium mb-4">{ref.role}</p>
            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg w-fit">
              <Phone size={18} />
              <span className="font-mono">{ref.phone}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default References;