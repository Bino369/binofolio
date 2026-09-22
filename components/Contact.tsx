import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Phone, Github, Mail, Camera } from 'lucide-react';

const contactContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const contactCardVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-transparent to-purple-900/10">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-display font-bold mb-8"
        >
          Let's Create <span className="text-stroke-white text-transparent italic">Chaos</span> Together.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl text-gray-400 mb-12"
        >
          Got a project? A photo idea? Or just want to send memes? I'm down.
        </motion.p>

        {/* Staggered Contact Cards with Spring Hover Physics */}
        <motion.div 
          variants={contactContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16"
        >
          {/* Instagram Card */}
          <motion.a 
            href="https://instagram.com/binooyyyyyy" 
            target="_blank" 
            rel="noreferrer"
            variants={contactCardVariants}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="glass-panel p-8 rounded-3xl flex flex-col items-center gap-4 hover:border-pink-500/40 hover:shadow-[0_15px_30px_rgba(236,72,153,0.15)] transition-colors group"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Instagram size={32} className="text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Instagram</h3>
              <p className="text-gray-400">@binooyyyyyy</p>
            </div>
          </motion.a>

          {/* Unsplash Card */}
          <motion.a 
            href="https://unsplash.com/@binoy369" 
            target="_blank" 
            rel="noreferrer"
            variants={contactCardVariants}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="glass-panel p-8 rounded-3xl flex flex-col items-center gap-4 hover:border-purple-500/40 hover:shadow-[0_15px_30px_rgba(168,85,247,0.15)] transition-colors group"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-500 via-purple-600 to-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-pink-500/20">
              <Camera size={32} className="text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Unsplash</h3>
              <p className="text-gray-400">@binoy369</p>
            </div>
          </motion.a>

          {/* GitHub Card */}
          <motion.a 
            href="https://github.com/bino369" 
            target="_blank" 
            rel="noreferrer"
            variants={contactCardVariants}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="glass-panel p-8 rounded-3xl flex flex-col items-center gap-4 hover:border-white/30 hover:shadow-[0_15px_30px_rgba(255,255,255,0.1)] transition-colors group"
          >
            <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Github size={32} className="text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">GitHub</h3>
              <p className="text-gray-400">@bino369</p>
            </div>
          </motion.a>

          {/* Email Card */}
          <motion.a 
            href="mailto:binoyanil85@gmail.com" 
            variants={contactCardVariants}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="glass-panel p-8 rounded-3xl flex flex-col items-center gap-4 hover:border-blue-500/40 hover:shadow-[0_15px_30px_rgba(59,130,246,0.15)] transition-colors group"
          >
            <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail size={32} className="text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Email</h3>
              <p className="text-gray-400 text-sm">binoyanil85@gmail.com</p>
            </div>
          </motion.a>

          {/* Phone/Contact Card */}
          <motion.a 
            href="tel:+917306745406" 
            variants={contactCardVariants}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="glass-panel p-8 rounded-3xl flex flex-col items-center gap-4 hover:border-green-500/40 hover:shadow-[0_15px_30px_rgba(34,197,94,0.15)] transition-colors group"
          >
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone size={32} className="text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Phone</h3>
              <p className="text-gray-400">+91 7306745406</p>
            </div>
          </motion.a>
        </motion.div>

        {/* Footer-ish area */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Binoy. Built with 💻 & 📸
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Docs</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Style</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Vibes</a>
          </div>
        </motion.div>
      </div>
      
      <style>{`
        .text-stroke-white {
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
        }
      `}</style>
    </section>
  );
};

export default Contact;