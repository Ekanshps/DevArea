'use client'

import React, { useState, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Palette, Zap, ShoppingCart, TrendingUp, MessageCircle, RefreshCw, Wrench } from 'lucide-react'
import { useTheme } from '@/components/providers/ThemeProvider'

interface MegaDropdownService {
  id: string
  title: string
  description: string
  href: string
  icon: React.ReactNode
  color: string
}

const MEGA_DROPDOWN_SERVICES: MegaDropdownService[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom websites and high-performance web apps.',
    href: '/services/web-development',
    icon: <Code2 size={32} />,
    color: '#2563eb',
  },
  {
    id: 'uiux-design',
    title: 'UI/UX Design',
    description: 'Beautiful, user-centered designs that drive engagement.',
    href: '/services/uiux-design',
    icon: <Palette size={32} />,
    color: '#a855f7',
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    description: 'High-converting landing pages optimized for performance.',
    href: '/services/landing-pages',
    icon: <Zap size={32} />,
    color: '#ec4899',
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce Solutions',
    description: 'Full-featured ecommerce platforms that drive sales.',
    href: '/services/ecommerce',
    icon: <ShoppingCart size={32} />,
    color: '#f97316',
  },
  {
    id: 'seo-websites',
    title: 'SEO Optimization',
    description: 'Websites built for search visibility and organic growth.',
    href: '/services/seo-websites',
    icon: <TrendingUp size={32} />,
    color: '#16a34a',
  },
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot Integration',
    description: 'Intelligent chatbots that enhance customer experience.',
    href: '/services/ai-chatbot',
    icon: <MessageCircle size={32} />,
    color: '#0891b2',
  },
  {
    id: 'website-redesign',
    title: 'Website Redesign',
    description: 'Modernize and optimize your existing online presence.',
    href: '/services/website-redesign',
    icon: <RefreshCw size={32} />,
    color: '#7c3aed',
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    description: 'Ongoing support, updates, and optimization for peak performance.',
    href: '/services/maintenance',
    icon: <Wrench size={32} />,
    color: '#64748b',
  },
]

interface ServicesMegaDropdownProps {
  isOpen: boolean
  onClose: () => void
}

export const ServicesMegaDropdown = ({ isOpen, onClose }: ServicesMegaDropdownProps) => {
  const [activeService, setActiveService] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { theme } = useTheme()

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      onClose()
    }, 150)
  }

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  return (
    <>
      {/* Dropdown Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="fixed left-0 right-0 z-40 pt-2 px-4 sm:px-6 lg:px-8 pointer-events-auto"
            style={{ top: '100px' }}
          >
            {/* Mega Dropdown Content */}
            <div className="max-w-6xl mx-auto">
              <motion.div
                className={`
                  rounded-[32px] shadow-2xl backdrop-blur-md
                  ${
                    theme === 'dark'
                      ? 'bg-[#020617] border border-white/8'
                      : 'bg-white border border-gray-100'
                  }
                `}
                style={{
                  boxShadow:
                    theme === 'dark'
                      ? '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.3)'
                      : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.05)',
                }}
              >
                <div className="p-6 sm:p-8 lg:p-10">
                  {/* Single Row Layout with Smooth Horizontal Scroll */}
                  <div className="overflow-x-auto overflow-y-hidden scroll-smooth pb-2 [scrollbar-width:thin]">
                    <div className="flex flex-nowrap gap-6 min-w-max">
                    {MEGA_DROPDOWN_SERVICES.map((service) => (
                      <Link key={service.id} href={service.href}>
                        <motion.div
                          onClick={onClose}
                          onMouseEnter={() => setActiveService(service.id)}
                          onMouseLeave={() => setActiveService(null)}
                          animate={{
                            backgroundColor:
                              activeService === service.id
                                ? service.color
                                : theme === 'dark'
                                  ? 'rgba(255, 255, 255, 0.02)'
                                  : 'rgba(0, 0, 0, 0.02)',
                          }}
                          transition={{ duration: 0.3 }}
                          className="w-[260px] p-6 rounded-2xl cursor-pointer group transition-all duration-300 shrink-0"
                          style={{
                            transform: activeService === service.id ? 'translateY(-4px)' : 'translateY(0)',
                          }}
                        >
                          {/* Icon Box */}
                          <motion.div
                            animate={{
                              backgroundColor:
                                activeService === service.id
                                  ? 'rgba(255, 255, 255, 0.2)'
                                  : theme === 'dark'
                                    ? 'rgba(255, 255, 255, 0.08)'
                                    : 'rgba(0, 0, 0, 0.05)',
                              color: activeService === service.id ? '#ffffff' : service.color,
                            }}
                            transition={{ duration: 0.3 }}
                            className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                          >
                            {service.icon}
                          </motion.div>

                          {/* Title */}
                          <motion.h3
                            animate={{
                              color: activeService === service.id ? '#ffffff' : theme === 'dark' ? '#ffffff' : '#000000',
                            }}
                            transition={{ duration: 0.3 }}
                            className="text-lg font-semibold mb-2 transition-colors duration-300"
                          >
                            {service.title}
                          </motion.h3>

                          {/* Description */}
                          <motion.p
                            animate={{
                              color: activeService === service.id ? 'rgba(255, 255, 255, 0.9)' : theme === 'dark' ? '#94a3b8' : '#64748b',
                            }}
                            transition={{ duration: 0.3 }}
                            className="text-sm leading-relaxed transition-colors duration-300"
                          >
                            {service.description}
                          </motion.p>

                          {/* Hover Arrow */}
                          <motion.div
                            animate={{
                              opacity: activeService === service.id ? 1 : 0,
                              x: activeService === service.id ? 4 : -4,
                            }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 text-white text-sm font-medium flex items-center gap-1"
                          >
                            Explore →
                          </motion.div>
                        </motion.div>
                      </Link>
                    ))}

                    {/* See More Button */}
                    <Link href="/services">
                      <motion.div
                        onClick={onClose}
                        onMouseEnter={() => setActiveService('see-more')}
                        onMouseLeave={() => setActiveService(null)}
                        animate={{
                          backgroundColor:
                            activeService === 'see-more'
                              ? theme === 'dark'
                                ? '#1f2937'
                                : '#f3f4f6'
                              : theme === 'dark'
                                ? 'rgba(255, 255, 255, 0.02)'
                                : 'rgba(0, 0, 0, 0.02)',
                        }}
                        transition={{ duration: 0.3 }}
                        className="w-[260px] p-6 rounded-2xl cursor-pointer group transition-all duration-300 border-2 border-dashed shrink-0"
                        style={{
                          borderColor: activeService === 'see-more' 
                            ? theme === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)'
                            : theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                          transform: activeService === 'see-more' ? 'translateY(-4px)' : 'translateY(0)',
                        }}
                      >
                        <div className="flex flex-col items-center justify-center h-full min-h-[170px] text-center">
                          {/* Icon */}
                          <motion.div
                            animate={{
                              scale: activeService === 'see-more' ? 1.1 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                            className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 transition-all duration-300 ${
                              activeService === 'see-more'
                                ? 'bg-yellow-400'
                                : theme === 'dark'
                                  ? 'bg-yellow-400/20'
                                  : 'bg-yellow-400/10'
                            }`}
                          >
                            <svg
                              className={`w-6 h-6 ${
                                activeService === 'see-more'
                                  ? 'text-black'
                                  : theme === 'dark'
                                    ? 'text-yellow-400'
                                    : 'text-yellow-600'
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                              />
                            </svg>
                          </motion.div>

                          {/* Title */}
                          <motion.h3
                            animate={{
                              color: activeService === 'see-more' ? theme === 'dark' ? '#ffffff' : '#000000' : theme === 'dark' ? '#ffffff' : '#000000',
                              fontWeight: activeService === 'see-more' ? 700 : 600,
                            }}
                            transition={{ duration: 0.3 }}
                            className="text-lg mb-2 transition-all duration-300"
                          >
                            See All Services
                          </motion.h3>

                          {/* Description */}
                          <motion.p
                            animate={{
                              color: activeService === 'see-more' ? theme === 'dark' ? '#cbd5e1' : '#475569' : theme === 'dark' ? '#94a3b8' : '#64748b',
                            }}
                            transition={{ duration: 0.3 }}
                            className="text-xs leading-relaxed transition-colors duration-300"
                          >
                            View all 8 services
                          </motion.p>
                        </div>
                      </motion.div>
                    </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
