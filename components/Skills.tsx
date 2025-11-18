import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', level: 'w', color: 'text-cyan-400' },
  { name: 'TypeScript', level: 'w', color: 'text-blue-500' },
  { name: 'Tailwind', level: 'w', color: 'text-teal-400' },
  { name: 'Python', level: 'w', color: 'text-yellow-300' },
  { name: 'Lightroom', level: 'w', color: 'text-blue-300' },
  { name: 'Photoshop', level: 'w', color: 'text-blue-600' },
  { name: 'Premiere Pro', level: 'w', color: 'text-purple-600' },
  { name: 'Figma', level: 'w', color: 'text-pink-500' },
  { name: 'Git', level: 'w', color: 'text-orange-500' },
  { name: 'SQL', level: 'w', color: 'text-white' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-black/50 overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-2">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Arsenal</span>
        </h2>
        <p className="text-gray-500">Tools I use to break things (and fix them)</p>
      </div>

      {/* Infinite Scroll Marquee Effect */}
      <div className="relative flex overflow-x-hidden">
        <div className="py-12 animate-marquee whitespace-nowrap flex gap-8">
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <div 
              key={`${skill.name}-${index}`}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full glass-panel border border-white/10 hover:border-white/30 transition-all cursor-default"
            >
              <span className={`text-2xl md:text-4xl font-bold ${skill.color}`}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex gap-8" style={{ left: '100%' }}>
             {[...skills, ...skills, ...skills].map((skill, index) => (
            <div 
              key={`${skill.name}-${index}-duplicate`}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full glass-panel border border-white/10 hover:border-white/30 transition-all cursor-default"
            >
              <span className={`text-2xl md:text-4xl font-bold ${skill.color}`}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Static Grid for mobile accessibility if needed, but keeping it clean with just marquee for the vibe */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;