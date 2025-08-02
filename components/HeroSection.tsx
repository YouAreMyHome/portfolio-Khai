"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

import { Download, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import portfolio from '../lib/portfolioData';

export default function HeroSection() {
  // Map label to icon
  const iconMap: Record<string, any> = {
    'GitHub': Github,
    'LinkedIn': Linkedin,
    'Email': Mail,
  };
  const { profile } = portfolio;
  const socialLinks = profile.socialLinks.map((link) => ({
    ...link,
    icon: iconMap[link.label] || Mail,
  }));

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-electric-blue to-galaxy-purple p-1 pulse-glow">
              <div className="w-full h-full rounded-full bg-galaxy-dark flex items-center justify-center overflow-hidden">
                <Image
                  src={profile.avatarUrl}
                  alt={profile.name}
                  width={176}
                  height={176}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="font-orbitron text-4xl md:text-6xl font-bold">
            <span className="glow-text">{profile.name}</span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-2"
          >
            <p className="text-xl md:text-2xl text-electric-blue font-semibold">
              {profile.title}
            </p>
            <p className="text-lg text-gray-300">
              {profile.university}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400"
          >
            <div className="flex items-center space-x-2">
              <MapPin size={16} className="text-electric-blue" />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} className="text-electric-blue" />
              <span>{profile.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={16} className="text-electric-blue" />
              <span>{profile.phone}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-electric-blue to-galaxy-purple hover:from-galaxy-purple hover:to-electric-blue transition-all duration-300 font-semibold neon-border"
            >
              <Download className="mr-2" size={20} />
              Tải CV
            </Button>

            <div className="flex items-center space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="p-3 rounded-full cyber-card hover:bg-electric-blue/20 transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-electric-blue rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-electric-blue rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}