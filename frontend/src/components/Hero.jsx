import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FolderHeart } from 'lucide-react';

export default function Hero() {
  return (
    <motion.section 
      className="glass-panel p-8 md:p-12 relative overflow-hidden mt-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }} // Delay for the intro sequence to finish
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-cyan/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyber-purple/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
        
        {/* Profile Details */}
        <div className="flex-1 space-y-6">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-cyber-purple tracking-widest uppercase text-sm font-semibold mb-2">System Initialized</h2>
            <h1 className="text-4xl md:text-7xl font-bold font-sans text-white tracking-tight mb-4">
              Nigel <span className="text-gradient">Shivalkar</span>
            </h1>
            <p className="text-lg md:text-2xl text-cyber-light/80 font-light">
              MERN Stack Developer <span className="text-cyber-pink mx-2">|</span> Data Analyst <span className="text-cyber-pink mx-2">|</span> CS Student
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <a href="#projects" className="flex items-center gap-2 px-6 py-3 rounded-full bg-cyber-purple hover:bg-cyber-purple/80 border border-cyber-pink/50 text-white transition-all shadow-lg shadow-cyber-purple/20 cursor-pointer">
              <FolderHeart size={18} /> View Projects
            </a>
            <a href="https://github.com/nigel2405" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full glass-panel-hover border border-white/10 text-white transition-all">
              <Github size={18} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/nigel-shivalkar-250608372" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full glass-panel-hover border border-white/10 text-white transition-all">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href="#contact" className="flex items-center gap-2 px-6 py-3 rounded-full glass-panel-hover border border-white/10 text-white transition-all cursor-pointer">
              <Mail size={18} /> Contact
            </a>
          </motion.div>
        </div>
        
        {/* Holographic Avatar representation */}
        <motion.div 
          className="w-48 h-48 md:w-64 md:h-64 relative flex items-center justify-center shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="absolute inset-0 rounded-full border border-cyber-cyan/30 animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-4 rounded-full border border-cyber-pink/40 flex items-center justify-center animate-[spin_15s_linear_infinite_reverse]">
              <div className="w-full h-full rounded-full bg-gradient-to-tr from-cyber-dark to-cyber-cyan/30 backdrop-blur-md animate-glow" />
          </div>
          <div className="z-10 text-center flex flex-col items-center">
            <span className="font-mono text-3xl font-bold text-white tracking-widest">NS</span>
            <span className="text-xs text-cyber-cyan/80 mt-1 uppercase tracking-[0.2em]">Online</span>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
