"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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
    
    // Simulate form submission
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

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'tranvankhai@example.com',
      href: 'mailto:tranvankhai@example.com'
    },
    {
      icon: Phone,
      title: 'Điện thoại',
      value: '+84 xxx xxx xxx',
      href: 'tel:+84xxxxxxxxx'
    },
    {
      icon: MapPin,
      title: 'Địa chỉ',
      value: '279 Phan Anh, Bình Trị Đông, Bình Tân',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-white' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: MessageCircle, href: '#', label: 'Telegram', color: 'hover:text-blue-500' }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-transparent to-galaxy-dark/80">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold glow-text mb-4">
            Liên Hệ Với Tôi
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Sẵn sàng thảo luận về các cơ hội hợp tác hoặc dự án thú vị. Hãy kết nối với tôi!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-orbitron text-2xl font-bold text-electric-blue mb-6">
                Thông Tin Liên Hệ
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4 p-4 cyber-card rounded-lg group cursor-pointer"
                  >
                    <div className="flex-shrink-0 p-3 rounded-full bg-electric-blue/20 group-hover:bg-electric-blue/40 transition-colors">
                      <info.icon className="text-electric-blue" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-white group-hover:text-electric-blue transition-colors">
                        {info.title}
                      </p>
                      <p className="text-gray-400 text-sm">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-orbitron text-lg font-bold text-white mb-4">
                Kết Nối Xã Hội
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className={`p-3 rounded-full cyber-card ${social.color} transition-all duration-300`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="p-6 cyber-card rounded-lg"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-semibold text-white">Hiện tại đang tìm cơ hội</span>
              </div>
              <p className="text-gray-400 text-sm">
                Tôi đang tìm kiếm các cơ hội thực tập và việc làm trong lĩnh vực An Ninh Mạng và Phát Triển Phần Mềm.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
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