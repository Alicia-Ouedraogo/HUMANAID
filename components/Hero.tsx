import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-gold-400/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-gold-600 dark:text-gold-400 font-semibold tracking-wide uppercase mb-2">
              Portfolio
            </h2>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-heading text-slate-900 dark:text-white mb-6">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-6 font-light">
              {PERSONAL_INFO.title}
            </p>
            <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 flex items-center justify-center lg:justify-start gap-2">
              <MapPin size={18} /> {PERSONAL_INFO.location}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#projects" 
                className="px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
              >
                Voir mes projets <ArrowRight size={18} />
              </a>
              <a 
                href="/cv.pdf" 
                target="_blank"
                className="px-8 py-3 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                Télécharger CV <Download size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
          >
            <div className="absolute inset-0 bg-gold-400 rounded-full rotate-6 opacity-20 animate-pulse"></div>
            <img 
              src="/profile.jpg" 
              alt="Alicia Portrait" 
              className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;