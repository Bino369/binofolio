import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Aperture, Cpu, Zap } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image / Visual Area with Smooth Entrance */}
          <motion.div 
            initial={{ opacity: 0, x: -40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden relative z-10 border border-white/10 shadow-2xl shadow-purple-500/20 group">
              <img 
                src="https://drive.google.com/thumbnail?id=1PB0e6o4oi2Oc4EUYgo6fkjYusavbpGj-&sz=w1000" 
                alt="Binoy's Vibe" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-mono text-xs text-neon-green mb-1">STATUS</p>
                  <p className="font-bold text-xl">Caffeinated & Coding ☕️</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-32 h-32 border-2 border-dashed border-gray-700 rounded-full animate-spin-slow z-0 pointer-events-none"></div>
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 300, damping: 20 }}
              className="absolute -bottom-5 -right-5 glass-panel p-4 rounded-2xl z-20 flex items-center gap-3 border border-white/10"
            >
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold">Online</span>
            </motion.div>
          </motion.div>

          {/* Text Content with Staggered Scroll-Triggered Reveal */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl font-display font-bold mb-6"
            >
              Who is this <span className="text-purple-500">guy?</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-gray-300 text-lg mb-6 leading-relaxed"
            >
              Yo! I'm <strong className="text-white">Binoy</strong>. I'm a BCA student trying to survive deadlines and make cool stuff on the internet.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-gray-400 mb-8"
            >
              I exist in the overlap between "this code is elegant" and "why is my camera ISO so high?". When I'm not debugging a missing semicolon (pain), I'm probably out chasing sunsets or editing photos until 3 AM. No cap, I just love creating things that look good and work smooth.
            </motion.p>

            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.25,
                  }
                }
              }}
              className="grid grid-cols-2 gap-4"
            >
              <motion.div 
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                className="glass-panel p-4 rounded-2xl border border-white/5 hover:border-purple-500/50 hover:shadow-[0_10px_30px_rgba(176,38,255,0.15)] transition-colors cursor-default"
              >
                <Code2 className="text-purple-400 mb-2 transition-transform group-hover:scale-110" />
                <h3 className="font-bold">Full Stack</h3>
                <p className="text-xs text-gray-500">React, Node, & Spaghetti</p>
              </motion.div>

              <motion.div 
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                className="glass-panel p-4 rounded-2xl border border-white/5 hover:border-pink-500/50 hover:shadow-[0_10px_30px_rgba(244,114,182,0.15)] transition-colors cursor-default"
              >
                <Aperture className="text-pink-400 mb-2 transition-transform group-hover:scale-110" />
                <h3 className="font-bold">Photography</h3>
                <p className="text-xs text-gray-500">Portraits & Vibes</p>
              </motion.div>

              <motion.div 
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                className="glass-panel p-4 rounded-2xl border border-white/5 hover:border-cyan-500/50 hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] transition-colors cursor-default"
              >
                <Cpu className="text-cyan-400 mb-2 transition-transform group-hover:scale-110" />
                <h3 className="font-bold">Tech Nerd</h3>
                <p className="text-xs text-gray-500">If it has a chip, I like it</p>
              </motion.div>

              <motion.div 
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                className="glass-panel p-4 rounded-2xl border border-white/5 hover:border-green-500/50 hover:shadow-[0_10px_30px_rgba(34,197,94,0.15)] transition-colors cursor-default"
              >
                <Zap className="text-green-400 mb-2 transition-transform group-hover:scale-110" />
                <h3 className="font-bold">Fast Learner</h3>
                <p className="text-xs text-gray-500">Googling Professional</p>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;