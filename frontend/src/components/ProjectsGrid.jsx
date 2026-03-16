import React from 'react';
import { BentoCard } from './BentoGridDashboard';
import { FolderGit2, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectsGrid() {
  return (
    <BentoCard className="md:col-span-2 lg:col-span-2 group border-t-amethyst-primary/50 border-t">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold flex items-center gap-2 text-amethyst-light">
          <FolderGit2 className="text-amethyst-primary" /> Featured Project
        </h3>
        <a href="#github" className="text-xs text-amethyst-secondary hover:text-white transition-colors flex items-center gap-1">
          All Projects <ExternalLink size={12} />
        </a>
      </div>

      <motion.div 
        className="relative h-full flex flex-col justify-end p-6 rounded-xl overflow-hidden bg-amethyst-dark/40 border border-white/5"
        whileHover={{ scale: 1.01 }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-amethyst-dark via-amethyst-dark/80 to-transparent z-10" />
        
        {/* Placeholder for project mock image or data visualization */}
        <div className="absolute inset-0 opacity-20 border-[1px] border-amethyst-secondary/20 w-full h-[60%] -top-[10%] rounded-b-[40%] animate-pulse bg-gradient-to-b from-amethyst-primary/40 to-transparent blur-2xl" />

        <div className="relative z-20">
          <div className="flex flex-wrap gap-2 mb-3">
             <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-amethyst-primary/30 text-amethyst-secondary border border-amethyst-primary/40">MERN</span>
             <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-amethyst-primary/30 text-amethyst-secondary border border-amethyst-primary/40">RFID</span>
             <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-amethyst-primary/30 text-amethyst-secondary border border-amethyst-primary/40">IoT</span>
          </div>
          <h4 className="text-2xl font-bold text-white mb-2">Smart RFID Attendance System</h4>
          <p className="text-sm text-amethyst-light/80 mb-4 font-light">
            A role-based attendance tracking system for Admin, Teacher and Student with real-time database integration and hardware syncing.
          </p>
          <button className="px-4 py-2 border border-amethyst-secondary border-opacity-50 text-amethyst-light text-sm rounded hover:bg-amethyst-primary/20 transition-all font-mono">
           &gt; Initialize Repo View
          </button>
        </div>
      </motion.div>
    </BentoCard>
  );
}
