import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', color: 'text-cyan-400' },
  { name: 'TypeScript', color: 'text-blue-500' },
  { name: 'Tailwind', color: 'text-teal-400' },
  { name: 'Python', color: 'text-yellow-300' },
  { name: 'Lightroom', color: 'text-blue-300' },
  { name: 'Photoshop', color: 'text-blue-600' },
  { name: 'Premiere Pro', color: 'text-purple-600' },
  { name: 'Figma', color: 'text-pink-500' },
  { name: 'Git', color: 'text-orange-500' },
  { name: 'SQL', color: 'text-white' },
];

const Skills: React.FC = () => {
  // Duplicate the list to ensure we have enough content to scroll seamlessly
  const marqueeItems = [...skills, ...skills];

  return (
    <section id="skills" className="py-24 bg-black/50 overflow-hidden relative z-10">
      
      {/* Side Fade Masks */}
      <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 z-20 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 z-20 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 text-center mb-16 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl font-display font-bold mb-4"
        >
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Arsenal</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="text-gray-400 text-lg"
        >
          Tools I use to break things (and occasionally fix them)
        </motion.p>
      </div>

      {/* Robust Infinite Scroll Marquee with Smooth Viewport Entrance */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex overflow-hidden gap-8 select-none"
      >
        <div className="flex shrink-0 items-center gap-8 min-w-full justify-around animate-marquee">
          {marqueeItems.map((skill, index) => (
            <div 
              key={`list-1-${index}`}
              className="px-8 py-4 rounded-full glass-panel border border-white/10 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all flex items-center justify-center whitespace-nowrap group hover:bg-white/5 cursor-default"
            >
              <span className={`text-2xl md:text-3xl font-bold ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-8 min-w-full justify-around animate-marquee" aria-hidden="true">
          {marqueeItems.map((skill, index) => (
            <div 
              key={`list-2-${index}`}
              className="px-8 py-4 rounded-full glass-panel border border-white/10 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all flex items-center justify-center whitespace-nowrap group hover:bg-white/5 cursor-default"
            >
              <span className={`text-2xl md:text-3xl font-bold ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% - 2rem)); } /* Moves left by 100% width + gap-8 (2rem) */
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Skills;