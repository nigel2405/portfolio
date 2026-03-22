import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Linkedin, Briefcase, GraduationCap } from 'lucide-react';

export default function LinkedinSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yBlob = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section ref={ref} id="linkedin" className="min-h-screen w-full flex flex-col items-center justify-center py-32 lg:py-48 relative">
      <motion.div 
        style={{ y: yBlob }}
        className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyber-cyan/10 blur-[150px] rounded-full pointer-events-none" 
      />
      
      <div className="container mx-auto px-4 max-w-6xl z-10 text-center">
        
        <motion.div 
          style={{ y: yContent }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto"
        >
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass-panel p-10 md:p-16 relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 text-cyber-cyan/10">
              <Linkedin size={250} />
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <motion.div 
                 initial={{ scale: 0 }} 
                 whileInView={{ scale: 1 }} 
                 transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                 viewport={{ once: true }}
                 className="w-24 h-24 rounded-full bg-[#0077b5]/20 border border-[#0077b5]/50 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,119,181,0.3)]"
              >
                 <Linkedin size={40} className="text-[#0077b5]" />
              </motion.div>
              
              <h2 className="text-3xl md:text-5xl font-bold font-sans text-white mb-6">
                Let's Connect Professionally
              </h2>
              <p className="text-xl text-white/60 mb-10 max-w-xl text-center font-light leading-relaxed">
                Looking for a passionate MERN stack developer to join your next big project or internship program? My inbox is always open.
              </p>
              
              <motion.div 
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                 className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-10"
              >
                 <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="glass-panel p-6 flex flex-col items-center text-center gap-3">
                   <Briefcase className="text-cyber-cyan" />
                   <h4 className="font-bold text-white">Experience</h4>
                   <p className="text-sm text-cyber-light/60">Open to Internships & Junior Roles</p>
                 </motion.div>
                 <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="glass-panel p-6 flex flex-col items-center text-center gap-3">
                   <GraduationCap className="text-cyber-cyan" />
                   <h4 className="font-bold text-white">Education</h4>
                   <p className="text-sm text-cyber-light/60">Computer Science Student</p>
                 </motion.div>
              </motion.div>

            <a href="https://www.linkedin.com/in/nigel-shivalkar-250608372" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full bg-[#0077b5] hover:bg-[#0077b5]/80 transition-all font-bold text-white flex items-center gap-2">
               Connect on LinkedIn <Linkedin size={18} />
            </a>
          </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
