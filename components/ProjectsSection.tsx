"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, Code, Shield, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import portfolio from '../lib/portfolioData';
import Image from 'next/image';

// Map category to icon for display
const iconMap: Record<string, any> = {
  'Security': Shield,
  'Web App': Globe,
  'IoT': Globe,
  'Tool': Code,
};

const projects = portfolio.projects;

const categories = ['All', 'Security', 'Web App', 'IoT', 'Blockchain'];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold glow-text mb-4">
            Dự Án Cá Nhân
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Những dự án đã thực hiện trong lĩnh vực An Ninh Mạng và Phát Triển Ứng Dụng
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="font-orbitron text-2xl font-bold text-electric-blue mb-8"
          >
            Dự Án Nổi Bật
          </motion.h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="cyber-card rounded-xl overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-galaxy-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 p-2 rounded-full bg-galaxy-dark/80">
                    {(() => {
                      const Icon = iconMap[project.category] || Code;
                      return <Icon className="text-electric-blue" size={20} />;
                    })()}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-galaxy-purple uppercase tracking-wide">
                      {project.category}
                    </span>
                    <div className="flex space-x-2">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.github}
                        className="p-2 rounded-full bg-galaxy-dark/50 hover:bg-electric-blue/20 transition-colors"
                      >
                        <Github size={16} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.demo}
                        className="p-2 rounded-full bg-galaxy-dark/50 hover:bg-electric-blue/20 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                    </div>
                  </div>

                  <h3 className="font-orbitron text-xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs bg-electric-blue/10 text-electric-blue rounded-full border border-electric-blue/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="font-orbitron text-2xl font-bold text-electric-blue mb-8"
          >
            Tất Cả Dự Án
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="cyber-card rounded-xl overflow-hidden group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-galaxy-dark/60 to-transparent" />
                  <div className="absolute top-2 right-2 p-1.5 rounded-full bg-galaxy-dark/80">
                    {(() => {
                      const Icon = iconMap[project.category] || Code;
                      return <Icon className="text-electric-blue" size={14} />;
                    })()}
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-galaxy-purple uppercase font-medium">
                      {project.category}
                    </span>
                    <div className="flex space-x-1">
                      <motion.a
                        whileHover={{ scale: 1.2 }}
                        href={project.github}
                        className="p-1 rounded hover:bg-electric-blue/20 transition-colors"
                      >
                        <Github size={14} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.2 }}
                        href={project.demo}
                        className="p-1 rounded hover:bg-electric-blue/20 transition-colors"
                      >
                        <ExternalLink size={14} />
                      </motion.a>
                    </div>
                  </div>

                  <h4 className="font-orbitron font-bold text-white mb-2 text-sm group-hover:text-electric-blue transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-gray-400 text-xs mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-0.5 text-xs bg-electric-blue/10 text-electric-blue rounded border border-electric-blue/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 text-xs text-gray-500">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-galaxy-dark transition-all duration-300"
          >
            <Github className="mr-2" size={20} />
            Xem thêm trên GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}