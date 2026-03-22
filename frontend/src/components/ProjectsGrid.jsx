import React from 'react';
import { BentoCard } from './BentoGridDashboard';
import { FolderGit2, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectsGrid() {
  return (
    <BentoCard className="md:col-span-2 lg:col-span-2 group border-t-cyber-purple/50 border-t">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold flex items-center gap-2 text-cyber-light">
          <FolderGit2 className="text-cyber-pink" /> Featured Project
        </h3>
        <a href="#github" className="text-xs text-cyber-cyan hover:text-white transition-colors flex items-center gap-1">
          All Projects <ExternalLink size={12} />
        </a>
      </div>

      <motion.div 
        className="relative h-full flex flex-col justify-end p-6 rounded-xl overflow-hidden bg-cyber-dark/40 border border-white/5"
        whileHover={{ scale: 1.01 }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-cyber-dark/80 to-transparent z-10" />
        
        {/* Placeholder for project mock image or data visualization */}
        <div className="absolute inset-0 opacity-20 border-[1px] border-cyber-purple/20 w-full h-[60%] -top-[10%] rounded-b-[40%] animate-pulse bg-gradient-to-b from-cyber-purple/40 to-transparent blur-2xl" />

        <div className="relative z-20">
          <div className="flex flex-wrap gap-2 mb-3">
             <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-cyber-purple/30 text-cyber-cyan border border-cyber-purple/40">MERN</span>
             <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-cyber-purple/30 text-cyber-cyan border border-cyber-purple/40">Python</span>
             <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-cyber-purple/30 text-cyber-cyan border border-cyber-purple/40">Ngrok</span>
          </div>
          <h4 className="text-2xl font-bold text-white mb-2">P2P GPU Allocation System</h4>
          <p className="text-sm text-cyber-light/80 mb-4 font-light">
            A deployed platform to manage and allocate GPU resources efficiently securely over remote tunnels, built with Node.js and Python.
          </p>
          <a href="https://gpu-sharing-frontend.onrender.com/" target="_blank" rel="noreferrer" className="inline-block px-4 py-2 border border-cyber-cyan border-opacity-50 text-cyber-light text-sm rounded hover:bg-cyber-cyan/20 transition-all font-mono shadow-[0_0_10px_rgba(0,229,255,0.2)]">
           &gt; View Deployed App
          </a>
        </div>
      </motion.div>
    </BentoCard>
  );
}
