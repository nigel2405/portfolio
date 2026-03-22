import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootSequence = [
  "Initializing Developer System...",
  "Loading Portfolio Modules...",
  "Activating JARVIS Interface...",
  "Access Granted."
];

export default function CinematicIntro() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    if (currentStep < bootSequence.length) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 1200);
      return () => clearTimeout(timer);
    } else {
      const finishTimer = setTimeout(() => setIsBooting(false), 1000);
      return () => clearTimeout(finishTimer);
    }
  }, [currentStep]);

  return (
    <AnimatePresence>
      {isBooting && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0211] text-cyber-light"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {/* Glowing Core */}
          <motion.div 
            className="w-32 h-32 rounded-full bg-cyber-purple/20 flex items-center justify-center mb-12 shadow-[0_0_50px_rgba(179,136,255,0.5)] border border-cyber-cyan/50 relative"
            animate={{ 
              scale: [1, 1.2, 1],
              boxShadow: [
                "0 0 40px rgba(0,229,255,0.4)",
                 "0 0 80px rgba(179,136,255,0.8)",
                 "0 0 40px rgba(0,229,255,0.4)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-16 h-16 rounded-full bg-cyber-light/90 shadow-[0_0_20px_#00E5FF]" />
            
            {/* Orbiting rings */}
            <motion.div 
              className="absolute w-44 h-44 border border-cyber-cyan/30 rounded-full"
              animate={{ rotateX: 360, rotateY: 180 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
             <motion.div 
              className="absolute w-44 h-44 border border-cyber-pink/40 rounded-full"
              animate={{ rotateX: 180, rotateZ: 360 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          <div className="h-24 flex flex-col items-center font-mono text-center px-4 md:text-lg text-sm tracking-widest text-cyber-cyan">
            <AnimatePresence mode="wait">
              {currentStep < bootSequence.length && (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {bootSequence[currentStep]}
                  <motion.span 
                    animate={{ opacity: [0, 1, 0] }} 
                    transition={{ duration: 0.8, repeat: Infinity }}
                  >_</motion.span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
