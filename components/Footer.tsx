"use client";

import { motion } from 'framer-motion';
import { ArrowUp, Heart, Code } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Trang chủ', href: '#home' },
    { name: 'Giới thiệu', href: '#about' },
    { name: 'Dự án', href: '#projects' },
    { name: 'Liên hệ', href: '#contact' }
  ];

  return (
    <footer className="relative bg-gradient-to-t from-galaxy-dark to-transparent border-t border-electric-blue/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="font-orbitron text-2xl font-bold glow-text">
              TVK.dev
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Sinh viên ngành An Ninh Mạng với đam mê phát triển công nghệ và bảo mật thông tin.
              Luôn học hỏi và sáng tạo trong từng dự án.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>Made with</span>
              <Heart className="text-red-500" size={14} />
              <span>and</span>
              <Code className="text-electric-blue" size={14} />
              <span>by Trần Văn Khải</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-orbitron text-lg font-bold text-electric-blue">
              Liên Kết Nhanh
            </h3>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ x: 5, color: '#00bfff' }}
                  className="block text-gray-400 hover:text-electric-blue transition-colors text-sm"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-orbitron text-lg font-bold text-electric-blue">
              Công Nghệ
            </h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'Python', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Docker'].map((tech, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1 text-xs bg-electric-blue/10 text-electric-blue rounded-full border border-electric-blue/30 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-electric-blue/20 flex flex-col md:flex-row items-center justify-between"
        >
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Trần Văn Khải. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full cyber-card hover:bg-electric-blue/20 transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp 
              className="text-electric-blue group-hover:animate-bounce" 
              size={20} 
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 via-transparent to-galaxy-purple/10"></div>
      </div>
    </footer>
  );
}