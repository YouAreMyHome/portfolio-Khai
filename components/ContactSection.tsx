"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import portfolio from '../lib/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.');
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const iconMap: Record<string, any> = {
    'GitHub': Github,
    'LinkedIn': Linkedin,
    'Email': Mail,
    'Điện thoại': Phone,
    'Địa chỉ': MapPin,
  };
  const contactInfo = portfolio.contact;
  const socialLinks = portfolio.profile.socialLinks;

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-orbitron text-2xl font-bold text-electric-blue mb-6">
              Thông Tin Liên Hệ
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = iconMap[info.title] || Mail;
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4 p-4 cyber-card rounded-lg group cursor-pointer"
                  >
                    <div className="flex-shrink-0 p-3 rounded-full bg-electric-blue/20 group-hover:bg-electric-blue/40 transition-colors">
                      <Icon className="text-electric-blue" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-white group-hover:text-electric-blue transition-colors">
                        {info.title}
                      </p>
                      <p className="text-gray-400 text-sm">{info.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-orbitron text-lg font-bold text-white mb-4">
                Kết Nối Xã Hội
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = iconMap[social.label] || Mail;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className={`p-3 rounded-full cyber-card transition-all duration-300`}
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="p-6 cyber-card rounded-lg mt-8"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-semibold text-white">Hiện tại đang tìm cơ hội</span>
              </div>
              <p className="text-gray-400 text-sm">
                Tôi đang tìm kiếm các cơ hội thực tập và việc làm trong lĩnh vực An Ninh Mạng và Phát Triển Phần Mềm.
              </p>
            </motion.div>
          </div>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Họ và tên *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-galaxy-dark/50 border-electric-blue/30 text-white placeholder-gray-400 focus:border-electric-blue focus:ring-electric-blue/20"
                    placeholder="Nhập họ và tên"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-galaxy-dark/50 border-electric-blue/30 text-white placeholder-gray-400 focus:border-electric-blue focus:ring-electric-blue/20"
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Tiêu đề *
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-galaxy-dark/50 border-electric-blue/30 text-white placeholder-gray-400 focus:border-electric-blue focus:ring-electric-blue/20"
                  placeholder="Chủ đề liên hệ"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Nội dung *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-galaxy-dark/50 border-electric-blue/30 text-white placeholder-gray-400 focus:border-electric-blue focus:ring-electric-blue/20 resize-none"
                  placeholder="Viết tin nhắn của bạn..."
                />
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-electric-blue to-galaxy-purple hover:from-galaxy-purple hover:to-electric-blue disabled:opacity-50 disabled:cursor-not-allowed font-semibold py-3 text-lg neon-border"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                    />
                  ) : (
                    <Send className="mr-2" size={20} />
                  )}
                  {isSubmitting ? 'Đang gửi...' : 'Gửi tin nhắn'}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
               