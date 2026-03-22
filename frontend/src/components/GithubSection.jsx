import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, GitPullRequest, GitCommit, GitMerge } from 'lucide-react';
import GithubStats from './GithubStats';

export default function GithubSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yLeft = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const yRight = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section ref={ref} id="github" className="min-h-screen w-full flex flex-col items-center justify-center py-32 lg:py-48 relative">
      <div className="container mx-auto px-4 max-w-6xl z-10 flex flex-col md:flex-row items-center gap-12">
        
        <motion.div 
          style={{ y: yLeft }}
          className="flex-1 space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
             visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          <motion.div 
             variants={{ hidden: { opacity: 0, scale: 0.5, rotate: -45 }, visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", bounce: 0.6 } } }}
             animate={{ y: [0, -10, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="p-4 bg-cyber-cyan/10 w-fit rounded-2xl border border-cyber-cyan/30 mb-6"
          >
            <Github size={48} className="text-cyber-cyan" />
          </motion.div>
          <motion.h2 
             variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.4 } } }}
             className="text-4xl md:text-6xl font-bold font-sans text-white tracking-tight"
          >
            Open Source <br /> <span className="text-gradient">Contributions</span>
          </motion.h2>
          <motion.p 
             variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
             className="text-lg text-cyber-light/80 font-light leading-relaxed"
          >
            I actively contribute to open-source projects and maintain my own repositories, focusing on React performance, IoT bridging, and scalable backend services.
          </motion.p>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="pt-4 flex gap-4">
             <a href="https://github.com/nigel2405" target="_blank" rel="noreferrer" className="group px-8 py-4 rounded-full bg-cyber-cyan hover:bg-cyber-cyan/80 transition-all font-bold text-black shadow-[0_0_20px_rgba(0,229,255,0.4)] relative overflow-hidden flex items-center gap-2">
               <span className="relative z-10 transition-transform group-hover:scale-105">Follow on GitHub</span>
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:animate-[shimmer_1.5s_infinite]" />
             </a>
          </motion.div>
        </motion.div>

        <motion.div 
          style={{ y: yRight }}
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
