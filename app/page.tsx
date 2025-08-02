"use client";

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import AchievementsSection from '@/components/AchievementsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <ExperienceSection />
      <AchievementsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}