import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Briefcase, GraduationCap } from 'lucide-react';

export default function LinkedinSection() {
  return (
    <section id="linkedin" className="min-h-screen w-full flex flex-col items-center justify-center py-20 relative">
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amethyst-secondary/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-6xl z-10 text-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto glass-panel p-10 md:p-16 relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 text-amethyst-primary/10">
            <Linkedin size={250} />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-[#0077b5]/20 border border-[#0077b5]/50 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,119,181,0.3)]">
               <Linkedin size={40} className="text-[#0077b5]" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold font-sans text-white mb-6">
              Let's Connect Professionally
            </h2>
            <p className="text-xl text-amethyst-light/80 mb-10 max-w-xl text-center font-light">
              Looking for a passionate MERN stack developer to join your next big project or internship program? My inbox is always open.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-10">
               <div className="glass-panel p-6 flex flex-col items-center text-center gap-3">
                 <Briefcase className="text-amethyst-secondary" />
                 <h4 className="font-bold text-white">Experience</h4>
                 <p className="text-sm text-amethyst-light/60">Open to Internships & Junior Roles</p>
               </div>
               <div className="glass-panel p-6 flex flex-col items-center text-center gap-3">
                 <GraduationCap className="text-amethyst-secondary" />
                 <h4 className="font-bold text-white">Education</h4>
                 <p className="text-sm text-amethyst-light/60">Computer Science Student</p>
               </div>
            </div>

            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full bg-[#0077b5] hover:bg-[#0077b5]/80 transition-all font-bold text-white flex items-center gap-2">
               Connect on LinkedIn <Linkedin size={18} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
