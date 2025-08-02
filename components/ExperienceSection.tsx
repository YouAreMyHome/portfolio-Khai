"use client";

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';
import portfolio from '../lib/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold glow-text mb-4">
            Kinh Nghiệm & Học Vấn
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hành trình học tập và phát triển trong lĩnh vực An Ninh Mạng và Công Nghệ Thông Tin
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-electric-blue to-galaxy-purple"></div>

          <div className="space-y-12">
            {portfolio.experiences.map((exp, index) => {
              const key = `${exp.title}-${exp.organization}`;
              const isEven = index % 2 === 0;
              return (
                <div key={key} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 bg-electric-blue rounded-full border-4 border-galaxy-dark pulse-glow z-10"></div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-1/2 ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="cyber-card p-6 rounded-xl floating">
                        <div className="flex items-center justify-between mb-3">
                          <div className={`flex items-center space-x-2 ${isEven ? 'flex-row-reverse space-x-reverse' : ''}`}>
                            {exp.type === 'education' ? (
                              <GraduationCap className="text-electric-blue" size={24} />
                            ) : (
                              <Briefcase className="text-galaxy-purple" size={24} />
                            )}
                            <span className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                              {exp.type === 'education' ? 'Học vấn' : 'Kinh nghiệm'}
                            </span>
                          </div>
                        </div>
                        <h3 className="font-orbitron text-xl font-bold text-white mb-2">
                          {exp.title}
                        </h3>
                        <div className="space-y-2 mb-4">
                          <p className="text-electric-blue font-semibold">{exp.organization}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Calendar size={14} />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin size={14} />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-4">{exp.description}</p>
                        <div className="space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <div key={achievement} className="flex items-center space-x-2">
                              <div className="w-1 h-1 bg-electric-blue rounded-full"></div>
                              <span className="text-sm text-gray-400">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2"></div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}