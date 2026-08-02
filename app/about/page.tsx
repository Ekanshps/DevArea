'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Lightbulb,
  Users,
  Target,
  Rocket,
  Code2,
  Eye,
  Heart,
  Brain,
  Zap,
  Shield,
  MessageSquare,
  TrendingUp,
  Smartphone,
} from 'lucide-react';
import Link from 'next/link';

// Components
import HighlightCard from '@/components/sections/HighlightCard';
import MissionCard from '@/components/sections/MissionCard';
import WhyChooseCard from '@/components/sections/WhyChooseCard';
import TeamCard from '@/components/sections/TeamCard';
import StatsCard from '@/components/sections/StatsCard';

// Highlight data
const highlights = [
  {
    title: 'Creative Team',
    description: 'Passionate designers and developers dedicated to excellence',
  },
  {
    title: 'Client-Focused',
    description: 'Your goals become our mission, success is our priority',
  },
  {
    title: 'Mobile-First',
    description: 'Every solution optimized for modern digital experiences',
  },
  {
    title: 'Growth-Driven',
    description: 'Strategic approach to sustainable business growth',
  },
];

// Mission data
const missionVision = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To empower businesses with cutting-edge digital solutions that drive growth, enhance user experiences, and establish meaningful connections in the online world.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'To be the most trusted digital partner for businesses seeking innovation, quality, and results-driven solutions in an ever-evolving digital landscape.',
  },
  {
    icon: Heart,
    title: 'Our Values',
    description:
      'Excellence, integrity, creativity, and collaboration. We believe in transparency, continuous improvement, and putting our clients success above all else.',
  },
];

// Why choose us
const whyChooseUs = [
  {
    icon: Brain,
    title: 'Strategic Thinking',
    description: 'Data-driven strategies that align with your business goals and market opportunities',
  },
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Well-structured, maintainable code built with modern technologies and best practices',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Perfect user experience across all devices and screen sizes',
  },
  {
    icon: TrendingUp,
    title: 'SEO-Ready',
    description: 'Every project optimized for search engines and organic visibility',
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description: 'Transparent collaboration from discovery through launch and beyond',
  },
  {
    icon: Shield,
    title: 'Ongoing Support',
    description: 'Dedicated technical support and maintenance for long-term success',
  },
];

// Team data
const team = [
  {
    image: './images/GauravTiwari.jpeg',
    name: 'Gaurav Tiwari',
    role: 'Founder & Full Stack Developer',
    bio: 'Visionary leader building innovative digital solutions with full-stack expertise',
    socials: {
      instagram: 'https://instagram.com/gauravtiwari',
      linkedin: 'https://linkedin.com/in/gauravtiwari',
      website: 'https://gaurav.com',
    },
  },
  {
    image: './images/Ekansh.jpeg',
    name: 'Ekansh Pratap Singh',
    role: 'Co-Founder, Frontend Developer & SEO Expert',
    bio: 'Frontend specialist combining beautiful UI design with SEO optimization expertise',
    socials: {
      instagram: 'https://instagram.com/heyyekansh',
      linkedin: 'https://linkedin.com/ekanshsinghyt/',
      website: 'https://epsingh.in',
    },
  },
   

   {
    image: './images/AyushSingh.jpeg',
    name: 'Ayush Singh',
    role: 'SQL Database Specialist',
    bio: 'SQL Database Specialist, ensuring efficient data management and optimization for applications',
    socials: {
      instagram: 'https://instagram.com/lyzr.og',
      linkedin: 'https://linkedin.com/ayushsingh/',
      website: 'https://devareyt.in',
    },
  },

];

// Stats data
const stats = [
  { number: '5+', label: 'Projects Delivered' },
  { number: '5+', label: 'Happy Clients' },
  { number: '3+', label: 'Years Experience' },
  { number: '24/7', label: 'Support Available' },
];

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-light-bg">
      {/* Hero Section */}
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-light-heading mb-4 leading-tight">
                Get to Know Us
              </h1>
              <p className="text-xl text-[#b91c1c] font-script italic mb-6">
                The Team Behind Dev Area
              </p>
              <p className="text-xl text-light-text mb-8 leading-relaxed">
                We're not just developers, We're storytellers, designers, and digital growth partners dedicated to helping businesses thrive online.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] text-white font-bold rounded-lg hover:shadow-lg transition-all"
                >
                  Start a Project
                </motion.a>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-amber-600 text-[#b91c1c] font-bold rounded-lg hover:bg-amber-600/10 transition-all"
                >
                  Contact Us
                </motion.a>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full h-96 lg:h-full min-h-96 rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/about.png"
                alt="DevArea Team"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Strip */}
      <section className="w-full py-12 px-4 bg-[#f59e0b]/5 border-y border-[#f59e0b]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <HighlightCard key={index} {...highlight} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-6xl font-serif font-bold text-light-heading mb-4 text-center">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] mx-auto mb-12" />

            <div className="space-y-6 text-lg text-light-text leading-relaxed">
              <p>
                <span className="font-bold text-light-heading">DevArea was founded with a simple vision — to make technology accessible, impactful, and meaningful.</span> What started as conversations between two passionate individuals soon evolved into a shared mission. Founder <span className="font-bold">Gaurav Tiwari</span> and Co-Founder <span className="font-bold">Ekansh Pratap Singh</span> believed that great ideas deserve great execution, regardless of the size of the business behind them.
              </p>

              <p>
                In the beginning, DevArea wasn't a company with a large office or a big team. It was built from late-night brainstorming sessions, countless hours of learning, and the determination to create digital solutions that truly solve problems. Every project became an opportunity to improve our skills, understand businesses better, and deliver something we could be proud of.
              </p>

              <p>
                As we connected with startups, entrepreneurs, and growing brands, we noticed a common challenge. Many had incredible ideas but lacked the technical expertise, design direction, or digital strategy needed to transform those ideas into reality. That realization became the foundation of DevArea's purpose — helping businesses bridge the gap between vision and execution.
              </p>

              <p>
                Every website we designed, every application we developed, and every digital experience we created strengthened our belief that technology is not just about writing code. It's about building trust, creating opportunities, and helping businesses grow in an increasingly digital world.
              </p>

              <p>
                <span className="font-bold text-light-heading">Today, DevArea is more than a web development and digital solutions company.</span> It represents innovation, continuous learning, and a commitment to quality. We combine creativity, modern technology, and strategic thinking to build websites, web applications, and digital products that are fast, scalable, and designed for long-term success.
              </p>

              <p>
                Our journey is still in its early chapters, but our ambition is clear. We aim to become a trusted technology partner for businesses that want more than just a website—they want a strong digital presence that drives real growth. Every challenge we solve and every client we work with moves us one step closer to that vision.
              </p>

              <p>
                 <span className="font-bold text-light-heading">At DevArea, we don't just build digital products.</span> We build experiences, relationships, and opportunities. Because we believe every successful business starts with a bold idea—and the right team to bring it to life.
              </p>


            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4 bg-[#f59e0b]/5">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-center text-light-heading mb-16"
          >
            Our <span className="bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] bg-clip-text text-transparent">
              Mission, Vision & Values
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionVision.map((item, index) => (
              <MissionCard key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-center text-light-heading mb-16"
          >
            Why Clients Choose <span className="bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] bg-clip-text text-transparent">
              Us
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChooseUs.map((item, index) => (
              <WhyChooseCard key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4 bg-[#f59e0b]/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-serif font-bold text-light-heading mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-light-text">
              Talented professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <TeamCard key={index} {...member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-center text-light-heading mb-16"
          >
            Our <span className="bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] bg-clip-text text-transparent">
              Impact
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4 bg-gradient-to-r from-[#b91c1c]/10 to-[#f59e0b]/10 border-y border-[#f59e0b]/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-light-heading">
              Let's Build Something <span className="bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] bg-clip-text text-transparent">
                Amazing
              </span>
            </h2>
            <p className="text-xl text-light-text mb-8 max-w-2xl mx-auto">
              Ready to start your next digital project? Let's collaborate and create something extraordinary together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] text-white font-bold rounded-lg hover:shadow-lg transition-all"
              >
                Start Project
              </motion.a>
              <motion.a
                href="tel:+917068317379"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-amber-600 text-[#b91c1c] font-bold rounded-lg hover:bg-amber-600/10 transition-all"
              >
                Call Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

