import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollHero() {
  const containerRef = useRef(null);
  
  // Track scroll progress within this component's area
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end center"]
  });

  // Map scroll progress (0 to 1) to a Y-axis rotation (-180 to 0)
  // At 0 progress, child is facing away (-180deg). At 1, child is facing front (0deg).
  const rotateY = useTransform(scrollYProgress, [0, 0.8], [-180, 0]);
  
  // Opacity fading for details
  const detailsOpacity = useTransform(scrollYProgress, [0.6, 0.9], [0, 1]);
  const backOpacity = useTransform(scrollYProgress, [0.4, 0.6], [1, 0]);

  return (
    <div ref={containerRef} className="relative w-full h-[200vh]">
      {/* Sticky container holds the 3D scene in place while we scroll past the 200vh */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden perspective-[2000px]">
        
        {/* The 3D rotating wrapper */}
        <motion.div 
          className="relative w-[300px] h-[400px] md:w-[600px] md:h-[400px] preserve-3d"
          style={{ rotateY }}
        >
          {/* BACK SIDE (Visible initially when rotateY is -180) */}
          <motion.div 
            className="absolute inset-0 backface-hidden flex flex-col items-center justify-center bg-amethyst-dark/50 rounded-2xl border border-white/5 shadow-2xl"
            style={{ transform: 'rotateY(180deg)', opacity: backOpacity }}
          >
            {/* Simple CSS illustration of a student's back and a laptop */}
            <div className="w-32 h-32 bg-amethyst-primary/30 rounded-full mb-4 animate-[pulse_4s_infinite]" />
            <div className="w-48 h-32 bg-amethyst-secondary/20 rounded-t-3xl border-t border-amethyst-primary/50 relative">
               <div className="absolute -top-4 w-full text-center text-amethyst-light/50 font-mono text-xs">Working...</div>
            </div>
            <p className="mt-8 text-amethyst-light/50 font-mono text-sm tracking-widest animate-pulse">SCROLL TO INTERACT</p>
          </motion.div>

          {/* FRONT SIDE (Visible when rotated to 0) -> The Laptop Screen Broadcasting Details */}
          <motion.div 
            className="absolute inset-0 backface-hidden flex flex-col items-center justify-center bg-[#0a0211] rounded-2xl border border-amethyst-primary shadow-[0_0_50px_rgba(122,63,145,0.4)] overflow-hidden"
            style={{ opacity: detailsOpacity }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-amethyst-primary/20 to-transparent opacity-50" />
            
            <div className="relative z-10 text-center p-8">
              <h2 className="text-amethyst-secondary tracking-widest uppercase text-sm font-semibold mb-4 drop-shadow-md">System Override Complete</h2>
              <h1 className="text-4xl md:text-6xl font-bold font-sans text-white tracking-tight mb-4">
                Nigel <span className="text-gradient">Shivalkar</span>
              </h1>
              <p className="text-lg md:text-xl text-amethyst-light/80 font-light mb-6">
                MERN Stack Developer <br className="md:hidden" /> <span className="hidden md:inline text-amethyst-primary mx-2">|</span> Computer Science Student
              </p>
              
              <div className="inline-block px-4 py-2 bg-amethyst-primary/20 border border-amethyst-primary/50 rounded-full font-mono text-xs text-[#00ffcc]">
                &gt; connection_established: true
              </div>
            </div>

            {/* Glowing screen effect */}
            <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-amethyst-primary/30 to-transparent mix-blend-screen pointer-events-none" />
          </motion.div>
        </motion.div>
        
        {/* Floating scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-1 h-12 bg-gradient-to-b from-amethyst-primary to-transparent rounded-full" />
        </motion.div>
      </div>
    </div>
  );
}
