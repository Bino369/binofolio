import React from 'react';
import { Project } from '../types';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projectData: Project[] = [
  {
    id: 1,
    title: "Disease Prediction ML",
    description: "Machine Learning system that predicts diseases based on symptoms provided by the user, utilizing three algorithms (Random Forest, Naive Bayes, Decision Tree) for accurate diagnostics.",
    tech: ["Python", "Machine Learning", "Scikit-Learn", "Pandas"],
    image: "/projects/disease-predict.png",
    link: "https://github.com/Bino369/Disease-predicts-using-ml"
  },
  {
    id: 2,
    title: "Lyrics Sync Visualizer",
    description: "A premium, interactive Apple Music-style lyrics visualizer web app featuring karaoke synchronization, real-time audio visualizer effects, and dynamic ambient background glow.",
    tech: ["HTML5", "CSS3", "JavaScript", "Web Audio API"],
    image: "/projects/lyrics-sync.png",
    link: "https://github.com/Bino369/lyrics-sync-visualizer"
  },
  {
    id: 3,
    title: "AudioShare",
    description: "Real-time peer-to-peer audio broadcasting web application allowing users to stream live microphone audio directly to listeners via a simple 4-digit room pin code.",
    tech: ["JavaScript", "WebRTC", "Node.js", "Socket.io"],
    image: "/projects/audio-share.png",
    link: "https://github.com/Bino369/audio-share"
  },
  {
    id: 4,
    title: "Attendance Tracker",
    description: "Lightweight attendance tracker web app built with React (Vite) and Express + MongoDB. Helps students maintain the critical 75% attendance threshold with history and CSV exports.",
    tech: ["TypeScript", "React", "Node.js", "MongoDB"],
    image: "/projects/attendance-tracker.png",
    link: "https://github.com/Bino369/bca-attendance-tracker"
  },
  {
    id: 5,
    title: "Notes & Papers Hub",
    description: "Web application for college students to upload, organize, search, and download study notes, previous year question papers, and assignments categorized by semester and subject.",
    tech: ["HTML5", "CSS3", "JavaScript", "Web Storage"],
    image: "/projects/notes-hub.png",
    link: "https://github.com/Bino369/Notes-Previous-Year-Papers-Hub"
  },
  {
    id: 6,
    title: "ExamAce",
    description: "Modern, glassmorphic Exam Preparation Tracker & Study Productivity App featuring live exam countdown timers, Pomodoro focus clock, Chart.js progress analytics, and topic checklists.",
    tech: ["JavaScript", "HTML5", "CSS3", "Chart.js"],
    image: "/projects/exam-ace.png",
    link: "https://github.com/Bino369/ExamAce"
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
            <span className="text-sm font-mono text-gray-500">06 PROJECTS_FOUND</span>
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
              className="group glass-panel rounded-3xl overflow-hidden border border-white/5 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
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
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
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
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <a href={project.link} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white text-black hover:bg-purple-400 hover:text-white transition-colors" title="View Source on GitHub">
                    <Github size={18} />
                  </a>
                  <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold hover:text-purple-400 transition-colors">
                    GitHub Repo <ExternalLink size={14} />
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