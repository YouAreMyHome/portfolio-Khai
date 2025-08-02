"use client";

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    type: 'education',
    title: 'Cử nhân An Ninh Mạng',
    organization: 'Đại học Ngoại ngữ - Tin học TP.HCM',
    location: 'TP. Hồ Chí Minh',
    period: '2022 - 2026',
    description: 'Chuyên ngành An Ninh Mạng với focus vào Cybersecurity, Network Security, và Information Security.',
    achievements: ['GPA: 3.5/4.0', 'Top 10% lớp', 'Thành viên CLB An Ninh Mạng']
  },
  {
    type: 'work',
    title: 'Thực tập sinh IT',
    organization: 'Công ty ABC Technology',
    location: 'TP. Hồ Chí Minh',
    period: '06/2024 - 08/2024',
    description: 'Tham gia phát triển và bảo trì các ứng dụng web, học hỏi về security testing và penetration testing.',
    achievements: ['Phát triển 3 web applications', 'Tham gia security audit', 'Được đánh giá xuất sắc']
  },
  {
    type: 'education',
    title: 'Chứng chỉ CEH',
    organization: 'EC-Council',
    location: 'Online',
    period: '03/2024',
    description: 'Certified Ethical Hacker - Chứng chỉ quốc tế về ethical hacking và penetration testing.',
    achievements: ['Score: 85%', 'Practical Labs completed', 'Advanced penetration testing']
  }
];

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
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="cyber-card p-6 rounded-xl floating">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`flex items-center space-x-2 ${index % 2 === 0 ? 'flex-row-reverse space-x-reverse' : ''}`}>
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
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-electric-blue rounded-full"></div>
                          <span className="text-sm text-gray-400">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-electric-blue rounded-full border-4 border-galaxy-dark pulse-glow"></div>

                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}