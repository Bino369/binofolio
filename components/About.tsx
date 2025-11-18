import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Aperture, Cpu, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image / Visual Area */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden relative z-10 border border-white/10 shadow-2xl shadow-purple-500/20 group">
             <img 
  src="https://lh3.googleusercontent.com/d/1PB0e6o4oi2Oc4EUYgo6fkjYusavbpGj-" 
  alt="Binoy's Vibe" 
  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
/>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-mono text-xs text-neon-green mb-1">STATUS</p>
                  <p className="font-bold text-xl">Caffeinated & Coding ☕️</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-32 h-32 border-2 border-dashed border-gray-700 rounded-full animate-spin-slow z-0"></div>
            <div className="absolute -bottom-5 -right-5 glass-panel p-4 rounded-2xl z-20 flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold">Online</span>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Who is this <span className="text-purple-500">guy?</span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Yo! I'm <strong className="text-white">Binoy</strong>. I'm a BCA student trying to survive deadlines and make cool stuff on the internet.
            </p>

            <p className="text-gray-400 mb-8">
              I exist in the overlap between "this code is elegant" and "why is my camera ISO so high?". When I'm not debugging a missing semicolon (pain), I'm probably out chasing sunsets or editing photos until 3 AM. No cap, I just love creating things that look good and work smooth.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-panel p-4 rounded-2xl border border-white/5 hover:border-purple-500/50 transition-colors">
                <Code2 className="text-purple-400 mb-2" />
                <h3 className="font-bold">Full Stack</h3>
                <p className="text-xs text-gray-500">React, Node, & Spaghetti</p>
              </div>
              <div className="glass-panel p-4 rounded-2xl border border-white/5 hover:border-pink-500/50 transition-colors">
                <Aperture className="text-pink-400 mb-2" />
                <h3 className="font-bold">Photography</h3>
                <p className="text-xs text-gray-500">Portraits & Vibes</p>
              </div>
              <div className="glass-panel p-4 rounded-2xl border border-white/5 hover:border-cyan-500/50 transition-colors">
                <Cpu className="text-cyan-400 mb-2" />
                <h3 className="font-bold">Tech Nerd</h3>
                <p className="text-xs text-gray-500">If it has a chip, I like it</p>
              </div>
              <div className="glass-panel p-4 rounded-2xl border border-white/5 hover:border-green-500/50 transition-colors">
                <Zap className="text-green-400 mb-2" />
                <h3 className="font-bold">Fast Learner</h3>
                <p className="text-xs text-gray-500">Googling Professional</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;