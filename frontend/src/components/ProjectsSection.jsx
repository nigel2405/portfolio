import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FolderHeart, ExternalLink } from 'lucide-react';
import ProjectsGrid from './ProjectsGrid'; 

export default function ProjectsSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax the background blob
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  // Parallax the heading slightly differently
  const yText = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} id="projects" className="min-h-screen w-full flex flex-col items-center justify-center py-32 lg:py-48 relative">
      <motion.div 
        style={{ y: yBg }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-purple/10 blur-[120px] rounded-full pointer-events-none" 
      />
      
      <div className="container mx-auto px-4 max-w-6xl z-10">
        <motion.div 
          style={{ y: yText }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.05 } }
            }}
            className="text-4xl md:text-5xl font-bold font-sans text-white flex items-center justify-center gap-4 mb-4"
          >
            <motion.div variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200 } } }}>
               <FolderHeart className="text-cyber-pink" size={40} />
            </motion.div>
            <div className="flex">
              {"Featured Projects".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12 } } }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-cyber-light/80 max-w-2xl mx-auto font-light"
          >
            Highlighting recent developments in MERN stack, IoT architecture, and Data Analytics.
          </motion.p>
        </motion.div>

        <div className="w-full">
           <ProjectsGrid />
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
             {/* Smart RFID */}
             <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-panel p-8 flex flex-col justify-between glass-panel-hover"
             >
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                     <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/30">MERN</span>
                     <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-cyber-pink/20 text-cyber-pink border border-cyber-pink/30">IoT</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Smart RFID Attendance System</h3>
                  <p className="text-cyber-light/80 text-sm font-light mb-6">
                    A full-stack hardware integration project featuring role-based dashboards, RESTful APIs, and real-time automated tracking via Node.js and MongoDB.
                  </p>
                </div>
                <a href="https://github.com/nigel2405" target="_blank" rel="noreferrer" className="self-start text-sm font-mono text-cyber-cyan hover:text-white transition-colors flex items-center gap-2">
                  &gt; View Source
                </a>
             </motion.div>

             {/* TripO */}
             <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-panel p-8 flex flex-col justify-between glass-panel-hover"
             >
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                     <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-cyber-yellow/20 text-cyber-yellow border border-cyber-yellow/30">Active Startup</span>
                     <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/30">React Native</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">TripO – Ride Booking Application</h3>
                  <p className="text-cyber-light/80 text-sm font-light mb-6">
                    A real-time ride tracking startup project. Features scalable mobile interfaces, tokenized authentication, and live database operations.
                  </p>
                </div>
                <div className="self-start text-sm font-mono text-cyber-yellow/80 hover:text-cyber-yellow transition-colors flex items-center gap-2 cursor-wait">
                  &gt; In Development...
                </div>
             </motion.div>
           </div>
        </div>
        
        <div className="mt-12 text-center">
            <a href="https://github.com/nigel2405" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass-panel glass-panel-hover text-white transition-all">
              Explore All on GitHub <ExternalLink size={16} />
            </a>
        </div>
      </div>
    </section>
  );
}
