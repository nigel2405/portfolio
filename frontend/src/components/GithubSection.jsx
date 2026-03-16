import React from 'react';
import { motion } from 'framer-motion';
import { Github, GitPullRequest, GitCommit, GitMerge } from 'lucide-react';
import GithubStats from './GithubStats';

export default function GithubSection() {
  return (
    <section id="github" className="min-h-screen w-full flex flex-col items-center justify-center py-20 relative bg-[#0e0316]">
      <div className="container mx-auto px-4 max-w-6xl z-10 flex flex-col md:flex-row items-center gap-12">
        
        <motion.div 
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="p-4 bg-amethyst-primary/10 w-fit rounded-2xl border border-amethyst-primary/30 mb-6">
            <Github size={48} className="text-amethyst-secondary" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-sans text-white tracking-tight">
            Open Source <br /> <span className="text-gradient">Contributions</span>
          </h2>
          <p className="text-lg text-amethyst-light/80 font-light leading-relaxed">
            I actively contribute to open-source projects and maintain my own repositories, focusing on React performance, IoT bridging, and scalable backend services.
          </p>
          <div className="pt-4 flex gap-4">
             <a href="https://github.com" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full bg-amethyst-primary hover:bg-amethyst-primary/80 transition-all font-bold text-white shadow-[0_0_20px_rgba(122,63,145,0.4)]">
               Follow on GitHub
             </a>
          </div>
        </motion.div>

        <motion.div 
          className="flex-1 w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
           <GithubStats />
        </motion.div>

      </div>
    </section>
  );
}
