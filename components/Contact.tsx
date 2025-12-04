import React from 'react';
import Section from './Section';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Youtube, Video } from 'lucide-react';

const Contact = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <Section id="contact" className="py-0">
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl font-bold font-heading mb-6">Parlons de votre projet</h2>
            <p className="text-slate-400 mb-8 text-lg">
              À la recherche d'une nouvelle opportunité, d'un stage ou d'une collaboration ? 
              N'hésitez pas à me contacter. Je suis toujours ouverte aux défis innovants.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 text-slate-300 hover:text-gold-400 transition-colors">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Emails</p>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="block font-medium hover:underline">{PERSONAL_INFO.email}</a>
                  <a href={`mailto:${PERSONAL_INFO.email2}`} className="block font-medium hover:underline">{PERSONAL_INFO.email2}</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 text-slate-300">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Téléphones</p>
                  <p className="font-medium">{PERSONAL_INFO.phone}</p>
                  <p className="font-medium">{PERSONAL_INFO.phone2}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Localisation</p>
                  <p className="font-medium">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
               <h3 className="text-sm uppercase tracking-wider text-slate-500 mb-4">Me suivre</h3>
               <div className="flex gap-4">
                 <a href={PERSONAL_INFO.social.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-gold-500 hover:text-slate-900 transition-all">
                    <Linkedin size={20} />
                 </a>
                 <a href={PERSONAL_INFO.social.github} target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-gold-500 hover:text-slate-900 transition-all">
                    <Github size={20} />
                 </a>
                 <a href={PERSONAL_INFO.social.youtube} target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-gold-500 hover:text-slate-900 transition-all">
                    <Youtube size={20} />
                 </a>
                 <a href={PERSONAL_INFO.social.tiktok} target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-gold-500 hover:text-slate-900 transition-all">
                    <Video size={20} />
                 </a>
               </div>
            </div>
          </div>

          <form className="bg-white/5 p-8 rounded-2xl border border-white/10" onSubmit={(e) => e.preventDefault()}>
            <h3 className="text-xl font-bold mb-6">M'envoyer un message</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Nom complet</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                  placeholder="Décrivez votre projet ou votre demande..."
                ></textarea>
              </div>
              <button className="w-full bg-gold-500 text-slate-900 font-bold py-4 rounded-lg hover:bg-gold-400 transition-colors flex items-center justify-center gap-2">
                Envoyer le message <Send size={18} />
              </button>
            </div>
          </form>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Tous droits réservés.</p>
        </div>
      </Section>
    </footer>
  );
};

export default Contact;