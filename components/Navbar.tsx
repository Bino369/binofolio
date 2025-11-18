import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Work', href: '#projects' },
    { name: 'Shots', href: '#gallery' },
    { name: 'Hit Me Up', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="container mx-auto px-6 flex justify-center">
        <div className={`glass-panel rounded-full px-6 py-3 flex items-center justify-between w-full max-w-3xl transition-all duration-300 ${isScrolled ? 'bg-black/60 border-white/10 shadow-lg shadow-purple-500/10' : 'bg-transparent border-transparent'}`}>
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-white text-black p-1 rounded-md group-hover:rotate-12 transition-transform">
              <Terminal size={18} strokeWidth={3} />
            </div>
            <span className="font-display font-bold text-lg tracking-tight">binoy<span className="text-purple-500">.dev</span></span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-gray-400 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 glass-panel rounded-2xl p-6 md:hidden flex flex-col gap-4 items-center shadow-2xl border border-purple-500/20"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-gray-200 py-2 w-full text-center hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;