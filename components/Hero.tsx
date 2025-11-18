import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownCircle, Instagram } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Chaos */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <span className="text-xs font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Available for freelance
            </span>
          </div>

          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 leading-tight tracking-tighter">
            I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">Binoy</span>.
            <br />
            <span className="relative">
              I code
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-purple-500 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span> & 
            <span className="italic font-serif font-light text-pink-400 ml-4">snap pics.</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            BCA Student. Digital hoarder. Making the web look cool and fixing bugs I probably created. 
            Currently obsessed with neon lights and clean code. 💀✨
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#projects" className="px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2">
              See my mess
              <ArrowDownCircle size={20} />
            </a>
            <a href="https://instagram.com/binooyyyyyy" target="_blank" rel="noreferrer" className="px-8 py-4 glass-panel rounded-full font-bold hover:bg-white/10 transition-colors flex items-center gap-2 text-white">
              <Instagram size={20} />
              Stalk me
            </a>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 animate-bounce text-gray-600">
        <ArrowDownCircle size={32} />
      </div>
    </section>
  );
};

export default Hero;