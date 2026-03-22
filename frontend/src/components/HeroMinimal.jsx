import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export default function HeroMinimal() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 dark:bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl"
      >
        <span className="text-secondary font-medium tracking-wide uppercase text-sm mb-6 block drop-shadow-sm">
          Welcome to my digital space
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-text-main mb-6 tracking-tight leading-tight">
          Hi, I'm Nigel <span className="text-primary block md:inline">Shivalkar.</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-muted mb-10 font-light leading-relaxed max-w-2xl mx-auto">
          MERN Stack Developer & Data Analyst. <br className="hidden md:block"/>
          Building minimal, high-performance web applications and intelligent systems.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/projects" className="group flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-secondary transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40">
            View My Work 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="/resume.pdf" download className="group flex items-center gap-2 px-8 py-4 bg-transparent text-text-main border border-glass-border hover:border-text-muted rounded-full font-medium transition-all glass-panel">
            Download Resume 
            <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
