import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollHero() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center gap-16 pt-32 pb-16 overflow-hidden min-h-screen">
      
      {/* Card 1: The Initial Welcome */}
      <motion.div 
        className="relative w-[95vw] max-w-[500px] md:max-w-[800px] glass-panel shadow-[0_0_40px_rgba(0,229,255,0.2)] p-8 md:p-12 text-center overflow-hidden"
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Animated internal rings / sparks */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute w-64 h-64 border border-cyber-cyan/10 rounded-full"
            style={{ top: '-10%', left: '-20%' }}
            animate={{ scale: [1, 1.3, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute w-40 h-40 border border-cyber-purple/20 rounded-full"
            style={{ bottom: '-10%', right: '-10%' }}
            animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="flex flex-col items-center relative z-10 py-8 md:py-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-main)] mb-6">
            Welcome to my <span className="text-gradient">Digital Space</span>
          </h2>
          <p className="text-[var(--color-text-muted)] text-lg md:text-xl font-light leading-relaxed mb-8 max-w-lg">
            A highly-curated showcase of software engineering, design, and innovation.
          </p>
          
          <div className="inline-block px-6 py-2 bg-cyber-cyan/20 border border-cyber-cyan/50 rounded-full font-mono text-sm text-cyber-cyan shadow-[0_0_15px_rgba(0,229,255,0.4)] animate-[pulse_3s_infinite]">
            System Ready for Interaction
          </div>
        </div>
        
        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cyber-cyan/40 font-mono text-xs tracking-[0.3em] uppercase animate-pulse w-full text-center">
           SCROLL DOWN TO INITIALIZE
        </p>
      </motion.div>

      {/* Floating scroll indicator between cards */}
      <motion.div 
        className="flex flex-col items-center py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-[3px] h-24 bg-gradient-to-b from-cyber-cyan/80 via-cyber-purple/50 to-transparent rounded-full shadow-[0_0_10px_rgba(0,229,255,0.6)]" />
      </motion.div>

      {/* Card 2: The Details & Intro */}
      <motion.div 
        className="relative w-[95vw] max-w-[500px] md:max-w-[800px] glass-panel shadow-[0_0_50px_rgba(179,136,255,0.4)] overflow-hidden"
        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-purple/10 to-transparent opacity-50 pointer-events-none" />
        
        <div className="relative z-10 text-center p-8 md:p-16">
          <h2 className="text-cyber-pink tracking-widest uppercase text-sm font-semibold mb-4 drop-shadow-md">System Override Complete</h2>
          <h1 className="text-4xl md:text-6xl font-bold font-sans text-[var(--color-text-main)] tracking-tight mb-4">
            Nigel <span className="text-gradient">Shivalkar</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-text-muted)] font-medium mb-4">
            MERN Stack Developer <br className="md:hidden" /> <span className="hidden md:inline text-cyber-cyan mx-2">|</span> Data Analyst
          </p>
          <p className="text-sm md:text-base text-[var(--color-text-muted)] max-w-lg mx-auto font-light leading-relaxed mb-8">
            I am a passionate software engineer dedicated to crafting scalable applications and dynamic user experiences. Combining an analytical mindset with creative problem solving to build innovative digital solutions.
          </p>
          
          <div className="inline-block px-4 py-2 bg-cyber-purple/20 border border-cyber-purple/50 rounded-full font-mono text-xs text-[#00ffcc]">
            &gt; connection_established: true
          </div>
        </div>

        {/* Glowing screen effect */}
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-cyber-purple/30 to-transparent mix-blend-screen pointer-events-none" />
      </motion.div>

    </div>
  );
}
