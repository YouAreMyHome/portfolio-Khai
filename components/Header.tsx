"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Award, FolderOpen, Mail } from 'lucide-react';

const navItems = [
  { name: 'Trang chủ', href: '#home', icon: Home },
  { name: 'Giới thiệu', href: '#about', icon: User },
  { name: 'Kinh nghiệm', href: '#experience', icon: Briefcase },
  { name: 'Thành tựu', href: '#achievements', icon: Award },
  { name: 'Dự án', href: '#projects', icon: FolderOpen },
  { name: 'Liên hệ', href: '#contact', icon: Mail },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-galaxy-dark/90 backdrop-blur-md border-b border-electric-blue/30' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-orbitron text-xl font-bold glow-text cursor-pointer"
          >
            TVK.dev
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, color: '#00bfff' }}
                className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-electric-blue"
              >
                <item.icon size={16} />
                <span>{item.name}</span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-electric-blue transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 py-4 border-t border-electric-blue/30"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-3 py-3 text-sm font-medium hover:text-electric-blue transition-colors"
              >
                <item.icon size={16} />
                <span>{item.name}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}