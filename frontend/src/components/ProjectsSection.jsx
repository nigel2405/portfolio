import React from 'react';
import { motion } from 'framer-motion';
import { FolderHeart, ExternalLink } from 'lucide-react';
import ProjectsGrid from './ProjectsGrid'; 

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen w-full flex flex-col items-center justify-center py-20 relative">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amethyst-primary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-6xl z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-white flex items-center justify-center gap-4 mb-4">
            <FolderHeart className="text-amethyst-primary" size={40} /> Featured Projects
          </h2>
          <p className="text-amethyst-secondary/80 max-w-2xl mx-auto font-light">
            Highlighting recent developments in MERN stack and IoT architecture.
          </p>
        </motion.div>

        <div className="w-full">
           <ProjectsGrid />
        </div>
        
        <div className="mt-12 text-center">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass-panel glass-panel-hover text-white transition-all">
              Explore All on GitHub <ExternalLink size={16} />
            </a>
        </div>
      </div>
    </section>
  );
}
