import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownCircle, Instagram } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Parallax layers with different scroll velocities
  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const blob3Y = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Chaos with Multi-speed Parallax */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <motion.div 
          style={{ y: blob1Y }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" 
        />
        <motion.div 
          style={{ y: blob2Y }}
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" 
        />
        <motion.div 
          style={{ y: blob3Y }}
          className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" 
        />
      </div>

      <motion.div 
        style={{ y: contentY, opacity: contentOpacity }}
        className="container mx-auto px-6 text-center z-10"
      >
        <div>
          {/* Badge Load-in */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Available for freelance
            </span>
          </motion.div>

          {/* Heading Load-in */}
          <motion.h1 
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="font-display text-6xl md:text-8xl font-bold mb-6 leading-tight tracking-tighter"
          >
            I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">Binoy</span>.
            <br />
            <span className="relative">
              I code
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-purple-500 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span> & 
            <span className="italic font-serif font-light text-pink-400 ml-4">snap pics.</span>
          </motion.h1>

          {/* Subtitle Paragraph Load-in */}
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
          >
            BCA Student. Digital hoarder. Making the web look cool and fixing bugs I probably created. 
            Currently obsessed with neon lights and clean code. 💀✨
          </motion.p>

          {/* CTA Buttons Load-in & Micro-interactions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)' }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-2"
            >
              See my mess
              <ArrowDownCircle size={20} />
            </motion.a>
            <motion.a 
              href="https://instagram.com/binooyyyyyy" 
              target="_blank" 
              rel="noreferrer" 
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.25)' }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="px-8 py-4 glass-panel rounded-full font-bold flex items-center gap-2 text-white border border-white/5"
            >
              <Instagram size={20} />
              Stalk me
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scroll indicator with entrance animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="absolute bottom-10 animate-bounce text-gray-600"
      >
        <ArrowDownCircle size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;