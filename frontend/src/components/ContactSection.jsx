import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, MapPin, Terminal, FileText } from 'lucide-react';

export default function ContactSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yLeft = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);
  const yRight = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} id="contact" className="min-h-screen w-full flex flex-col items-center justify-center py-32 lg:py-48 relative">
      <div className="container mx-auto px-4 max-w-6xl z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Initiate <span className="text-gradient">Contact</span>
          </motion.h2>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } }
            }}
            className="text-cyber-yellow font-mono tracking-widest text-sm flex justify-center"
          >
            {"AWAITING SYSTEM INPUT...".split("").map((char, index) => (
              <motion.span key={index} variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1 } }}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            style={{ y: yLeft }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
            className="space-y-6"
          >
            <motion.a variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.4 } } }} href="mailto:nigelshivalkar6@gmail.com" className="flex items-center gap-6 glass-panel p-6 glass-panel-hover group cursor-pointer block">
              <div className="w-14 h-14 rounded-full bg-cyber-yellow/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="text-cyber-yellow" />
              </div>
              <div>
                <h4 className="text-cyber-pink text-sm font-bold uppercase tracking-wider mb-1">Secure Email Line</h4>
                <p className="text-lg text-white">nigelshivalkar6@gmail.com</p>
              </div>
            </motion.a>

            <motion.div variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.4 } } }} className="flex items-center gap-6 glass-panel p-6">
              <div className="w-14 h-14 rounded-full bg-cyber-yellow/20 flex items-center justify-center">
                <MapPin className="text-cyber-yellow" />
              </div>
              <div>
                <h4 className="text-cyber-pink text-sm font-bold uppercase tracking-wider mb-1">Base of Operations</h4>
                <p className="text-lg text-white">Sindhudurg, Maharashtra</p>
              </div>
            </motion.div>

            <motion.a variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.4 } } }} href="/resume.pdf" download className="flex items-center gap-6 glass-panel p-6 glass-panel-hover group cursor-pointer block border-cyber-yellow/50">
              <div className="w-14 h-14 rounded-full bg-cyber-yellow flex items-center justify-center shadow-[0_0_15px_rgba(255,215,64,0.6)]">
                <FileText className="text-black" />
              </div>
              <div>
                <h4 className="text-cyber-pink text-sm font-bold uppercase tracking-wider mb-1">Documentation</h4>
                <p className="text-xl text-white font-bold">Download Resume .PDF</p>
              </div>
            </motion.a>
          </motion.div>

          <motion.form 
            style={{ y: yRight }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2">
              <label className="text-sm font-mono text-cyber-yellow uppercase tracking-widest flex items-center gap-2">
                <Terminal size={14} /> Name_Identifier
              </label>
              <input type="text" className="w-full bg-black/5 dark:bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-text-main dark:text-white focus:outline-none focus:border-cyber-yellow transition-colors font-mono text-sm" placeholder="Enter your name" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-mono text-cyber-yellow uppercase tracking-widest flex items-center gap-2">
                <Terminal size={14} /> Comm_Link (Email)
              </label>
              <input type="email" className="w-full bg-black/5 dark:bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-text-main dark:text-white focus:outline-none focus:border-cyber-yellow transition-colors font-mono text-sm" placeholder="Enter your email" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-mono text-cyber-yellow uppercase tracking-widest flex items-center gap-2">
                <Terminal size={14} /> Data_Payload
              </label>
              <textarea rows={4} className="w-full bg-black/5 dark:bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-text-main dark:text-white focus:outline-none focus:border-cyber-yellow transition-colors font-mono text-sm custom-scrollbar" placeholder="Type your message..." />
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-cyber-yellow to-cyber-pink hover:to-cyber-purple text-black font-bold py-4 rounded-lg transition-all shadow-[0_0_15px_rgba(255,215,64,0.4)] hover:shadow-[0_0_25px_rgba(255,215,64,0.8)] animate-[pulse_3s_infinite]">
              TRANSMIT MESSAGE
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}
