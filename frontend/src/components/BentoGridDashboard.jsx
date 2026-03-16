import React from 'react';
import { motion } from 'framer-motion';

export default function BentoGridDashboard({ children }) {
  return (
    <motion.section 
      className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      {children}
    </motion.section>
  );
}

export const BentoCard = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
      className={`glass-panel glass-panel-hover overflow-hidden relative ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      <div className="relative p-6 h-full flex flex-col z-10">
        {children}
      </div>
    </motion.div>
  );
};
