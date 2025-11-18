import React from 'react';
import { Project } from '../types';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projectData: Project[] = [
  {
    id: 1,
    title: "Portfolio V1",
    description: "The website you're looking at right now. Meta, right? Built with React and too much caffeine.",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: "https://picsum.photos/id/1/600/400",
    link: "#"
  },
  {
    id: 2,
    title: "Attendance Tracker",
    description: "Calculates if I can sleep in or if I need to run to class. Because 75% attendance is the real final boss.",
    tech: ["Python", "Automation", "SQL"],
    image: "https://picsum.photos/id/20/600/400",
    link: "https://github.com/Bino369/bca-attendance-tracker"
  },
  {
    id: 3,
    title: "Lens Logic",
    description: "A photography portfolio template for creatives who hate WordPress.",
    tech: ["HTML/CSS", "JS", "GSAP"],
    image: "https://picsum.photos/id/36/600/400",
    link: "#"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
              Stuff I <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Built</span>
            </h2>
            <p className="text-gray-400 mt-2">Warning: May contain bugs 🐛</p>
          </div>
          <div className="hidden md:block">
             <span className="text-sm font-mono text-gray-500">03 PROJECTS_FOUND</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass-panel rounded-3xl overflow-hidden border border-white/5 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-purple-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-mono px-2 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <a href={project.link} className="p-2 rounded-full bg-white text-black hover:bg-purple-400 hover:text-white transition-colors">
                    <Github size={18} />
                  </a>
                  <a href={project.link} className="flex items-center gap-2 text-sm font-bold hover:text-purple-400 transition-colors">
                    Live Demo <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;