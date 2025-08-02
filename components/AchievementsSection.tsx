"use client";

import { motion } from 'framer-motion';
import { Trophy, Award, Users, BookOpen, Zap, Target } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Giải Nhất Cybersecurity Contest',
    description: 'Giải nhất cuộc thi An Ninh Mạng cấp trường năm 2024',
    date: '2024',
    category: 'Giải thưởng'
  },
  {
    icon: Award,
    title: 'Chứng chỉ CEH',
    description: 'Certified Ethical Hacker từ EC-Council',
    date: '2024',
    category: 'Chứng chỉ'
  },
  {
    icon: Users,
    title: 'Trưởng nhóm dự án capstone',
    description: 'Dẫn dắt nhóm 5 người phát triển hệ thống Security Monitoring',
    date: '2024',
    category: 'Lãnh đạo'
  },
  {
    icon: BookOpen,
    title: 'Top 10% sinh viên xuất sắc',
    description: 'Xếp hạng trong top 10% sinh viên có thành tích học tập cao',
    date: '2023-2024',
    category: 'Học tập'
  },
  {
    icon: Zap,
    title: 'Hackathon Winner',
    description: 'Giải Ba tại cuộc thi Hackathon IT Challenge 2023',
    date: '2023',
    category: 'Cuộc thi'
  },
  {
    icon: Target,
    title: 'Volunteer IT Support',
    description: 'Tình nguyện hỗ trợ IT cho các tổ chức phi lợi nhuận',
    date: '2023-2024',
    category: 'Tình nguyện'
  }
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 px-6 bg-gradient-to-b from-transparent to-galaxy-dark/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold glow-text mb-4">
            Thành Tựu & Hoạt Động
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Những cột mốc quan trọng và thành tựu đạt được trong quá trình học tập và phát triển
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="cyber-card p-6 rounded-xl group"
            >
              <div className="flex items-start space-x-4">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="flex-shrink-0 p-3 rounded-full bg-gradient-to-r from-electric-blue/20 to-galaxy-purple/20 group-hover:from-electric-blue/40 group-hover:to-galaxy-purple/40 transition-all duration-300"
                >
                  <achievement.icon className="text-electric-blue" size={24} />
                </motion.div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-galaxy-purple uppercase tracking-wide">
                      {achievement.category}
                    </span>
                    <span className="text-xs text-gray-500">{achievement.date}</span>
                  </div>
                  
                  <h3 className="font-orbitron text-lg font-bold text-white mb-3 group-hover:text-electric-blue transition-colors">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>

              {/* Hover effect */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-blue to-galaxy-purple origin-left"
              />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '3.5', label: 'GPA', suffix: '/4.0' },
            { number: '15+', label: 'Dự án', suffix: '' },
            { number: '5+', label: 'Chứng chỉ', suffix: '' },
            { number: '2+', label: 'Năm kinh nghiệm', suffix: '' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="font-orbitron text-3xl md:text-4xl font-bold glow-text mb-2"
              >
                {stat.number}
                <span className="text-lg text-gray-400">{stat.suffix}</span>
              </motion.div>
              <p className="text-gray-400 text-sm uppercase tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}