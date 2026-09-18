'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  image: string;
  title: string;
  category: string;
  result: string;
  slug: string;
  index?: number;
}

export default function ProjectCard({
  id,
  image,
  title,
  category,
  result,
  slug,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={`/portfolio/${slug}`}>
        <motion.div
          whileHover={{ y: -8 }}
          className="group relative overflow-hidden rounded-2xl bg-white border border-light-border shadow-sm hover:shadow-xl transition-all duration-300 h-full cursor-pointer"
        >
          {/* Image Container */}
          <div className="relative h-64 overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100">
            <motion.img
              src={image}
              alt={title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Category Badge */}
            <div className="inline-block px-3 py-1 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-full text-sm font-semibold text-indigo-600 mb-3">
              {category}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-light-heading mb-2 group-hover:text-indigo-600 transition-colors">
              {title}
            </h3>

            {/* Result */}
            <p className="text-light-text text-sm mb-4 line-clamp-2">
              {result}
            </p>

            {/* Read More Link */}
            <div className="flex items-center text-indigo-600 font-semibold group-hover:gap-3 gap-2 transition-all">
              View Case Study
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Hover Accent */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      </Link>
    </motion.div>
  );
}
