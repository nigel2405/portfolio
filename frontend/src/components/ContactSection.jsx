import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Terminal, FileText } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen w-full flex flex-col items-center justify-center py-20 relative bg-black/40">
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
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-amethyst-secondary font-mono tracking-widest text-sm"
          >
            AWAITING SYSTEM INPUT...
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <a href="mailto:hello@example.com" className="flex items-center gap-6 glass-panel p-6 glass-panel-hover group cursor-pointer block">
              <div className="w-14 h-14 rounded-full bg-amethyst-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="text-amethyst-light" />
              </div>
              <div>
                <h4 className="text-amethyst-secondary text-sm font-bold uppercase tracking-wider mb-1">Secure Email Line</h4>
                <p className="text-xl text-white">hello@example.com</p>
              </div>
            </a>

            <div className="flex items-center gap-6 glass-panel p-6">
              <div className="w-14 h-14 rounded-full bg-amethyst-primary/20 flex items-center justify-center">
                <MapPin className="text-amethyst-light" />
              </div>
              <div>
                <h4 className="text-amethyst-secondary text-sm font-bold uppercase tracking-wider mb-1">Base of Operations</h4>
                <p className="text-xl text-white">Planet Earth</p>
              </div>
            </div>

            <a href="/resume.pdf" download className="flex items-center gap-6 glass-panel p-6 glass-panel-hover group cursor-pointer block border-amethyst-primary/50">
              <div className="w-14 h-14 rounded-full bg-amethyst-primary flex items-center justify-center shadow-[0_0_15px_rgba(122,63,145,0.6)]">
                <FileText className="text-white" />
              </div>
              <div>
                <h4 className="text-amethyst-secondary text-sm font-bold uppercase tracking-wider mb-1">Documentation</h4>
                <p className="text-xl text-white font-bold">Download Resume .PDF</p>
              </div>
            </a>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2">
              <label className="text-sm font-mono text-amethyst-secondary uppercase tracking-widest flex items-center gap-2">
                <Terminal size={14} /> Name_Identifier
              </label>
              <input type="text" className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amethyst-primary transition-colors font-mono text-sm" placeholder="Enter your name" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-mono text-amethyst-secondary uppercase tracking-widest flex items-center gap-2">
                <Terminal size={14} /> Comm_Link (Email)
              </label>
              <input type="email" className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amethyst-primary transition-colors font-mono text-sm" placeholder="Enter your email" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-mono text-amethyst-secondary uppercase tracking-widest flex items-center gap-2">
                <Terminal size={14} /> Data_Payload
              </label>
              <textarea rows={4} className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amethyst-primary transition-colors font-mono text-sm custom-scrollbar" placeholder="Type your message..." />
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-amethyst-primary to-amethyst-dark hover:from-amethyst-primary hover:to-amethyst-primary text-white font-bold py-4 rounded-lg transition-all shadow-lg shadow-amethyst-primary/20">
              TRANSMIT MESSAGE
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}
