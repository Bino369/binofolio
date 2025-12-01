import React from 'react';
import { Instagram, Phone, Github, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-transparent to-purple-900/10">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">
          Let's Create <span className="text-stroke-white text-transparent italic">Chaos</span> Together.
        </h2>
        <p className="text-xl text-gray-400 mb-12">
          Got a project? A photo idea? Or just want to send memes? I'm down.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Instagram Card */}
            <a 
                href="https://instagram.com/binooyyyyyy" 
                target="_blank" 
                rel="noreferrer"
                className="glass-panel p-8 rounded-3xl flex flex-col items-center gap-4 hover:bg-white/5 transition-colors group"
            >
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Instagram size={32} className="text-white" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold">Instagram</h3>
                    <p className="text-gray-400">@binooyyyyyy</p>
                </div>
            </a>

            {/* GitHub Card */}
            <a 
                href="https://github.com/bino369" 
                target="_blank" 
                rel="noreferrer"
                className="glass-panel p-8 rounded-3xl flex flex-col items-center gap-4 hover:bg-white/5 transition-colors group"
            >
                <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Github size={32} className="text-white" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold">GitHub</h3>
                    <p className="text-gray-400">@bino369</p>
                </div>
            </a>

            {/* Email Card */}
            <a 
                href="mailto:binoyanil85@gmail.com" 
                className="glass-panel p-8 rounded-3xl flex flex-col items-center gap-4 hover:bg-white/5 transition-colors group"
            >
                <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail size={32} className="text-white" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold">Email</h3>
                    <p className="text-gray-400 text-sm">binoyanil85@gmail.com</p>
                </div>
            </a>

            {/* Phone/Contact Card */}
            <a 
                href="tel:+917306745406" 
                className="glass-panel p-8 rounded-3xl flex flex-col items-center gap-4 hover:bg-white/5 transition-colors group"
            >
                <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone size={32} className="text-white" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold">Phone</h3>
                    <p className="text-gray-400">+91 7306745406</p>
                </div>
            </a>
        </div>

        {/* Footer-ish area */}
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Binoy. Built with 💻 & 📸
            </p>
            <div className="flex gap-6">
                <a href="#" className="text-gray-500 hover:text-white transition-colors">Docs</a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors">Style</a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors">Vibes</a>
            </div>
        </div>
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