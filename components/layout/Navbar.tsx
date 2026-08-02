'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Send, Sun, Moon, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { NAVIGATION } from '@/lib/constants'
import { useTheme } from '@/components/providers/ThemeProvider'
import { ServicesMegaDropdown } from '@/components/sections/ServicesMegaDropdown'

export const Navbar = () => {
  const logoSrc = '/images/logo1.png'
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isDropdownOpen])

  return (
    <>
      {/* Navbar Wrapper - Floating Effect */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
        style={{ y: 0 }}
      >
        {/* Background Filler (transparent at top, visible on scroll) */}
        <motion.div
          className={`h-20 transition-all duration-300 ${
            isScrolled ? 'lg:h-24' : 'lg:h-20'
          }`}
          animate={{
            backgroundColor: isScrolled
              ? 'rgba(255, 255, 255, 0)'
              : 'rgba(255, 255, 255, 0)',
          }}
        />
      </motion.div>

      {/* Desktop Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-auto`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Container for Floating Effect */}
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? 'px-4 sm:px-6 lg:px-8 py-3 sm:py-4'
              : 'px-4 sm:px-6 lg:px-8 py-4 sm:py-6'
          }`}
        >
          {/* Navbar Inner */}
          <div
            className={`transition-all duration-300 ${
              isScrolled
                ? 'max-w-5xl mx-auto backdrop-blur-md rounded-full shadow-lg border'
                : 'max-w-7xl mx-auto rounded-none shadow-none border-none'
            }`}
            style={isScrolled ? {
              backgroundColor: theme === 'dark' ? 'rgba(2, 6, 23, 0.95)' : 'rgba(255, 255, 255, 0.9)',
              borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(229, 231, 235, 1)',
              boxShadow: theme === 'dark' 
                ? 'rgba(0, 0, 0, 0.6) 0px 10px 15px -3px' 
                : 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px',
            } : {}}
          >
            <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 h-20">
              {/* Logo */}
              <Link href="/" className="flex-shrink-0 group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="transition-all"
                >
                  <Image
                    src={logoSrc}
                    alt="DevArea"
                    width={180}
                    height={52}
                    priority
                    className="h-10 w-auto object-contain"
                  />
                </motion.div>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-8" ref={dropdownRef}>
                {NAVIGATION.main.map((item) => (
                  item.label === 'Services' ? (
                    <div
                      key={item.href}
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      className="relative"
                    >
                      <motion.button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`flex items-center gap-1 transition-colors duration-200 font-medium text-sm lg:text-base group ${
                          isDropdownOpen
                            ? 'text-yellow-600 dark:text-yellow-400'
                            : 'text-yellow-500 dark:text-yellow-400 hover:text-yellow-600 dark:hover:text-yellow-300'
                        }`}
                      >
                        {item.label}
                        <motion.div
                          animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={16} />
                        </motion.div>
                        <span className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-600 to-yellow-500 dark:from-yellow-400 dark:to-yellow-300 transition-all duration-300"
                          style={{
                            width: isDropdownOpen ? '100%' : '0%'
                          }}
                        />
                      </motion.button>
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-light-text dark:text-dark-text hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-200 font-medium relative group text-sm lg:text-base"
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-600 to-yellow-500 dark:from-yellow-400 dark:to-yellow-300 group-hover:w-full transition-all duration-300" />
                    </Link>
                  )
                ))}
              </div>

              {/* CTA Button & Icons */}
              <div className="hidden md:flex gap-4 items-center">
                {/* Show "Get Started" button only when not scrolled */}
                {!isScrolled && (
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full hover:shadow-lg hover:shadow-yellow-400/40 transition-all duration-200 text-sm lg:text-base"
                    >
                      Get Started
                    </motion.button>
                  </Link>
                )}

                {/* Theme Toggle Button - Always Visible */}
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleTheme}
                  className="p-2.5 rounded-full bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-yellow-400 hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-yellow-400/20 transition-all duration-200 border border-transparent dark:border-white/10"
                  title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                >
                  {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </motion.button>

                {/* Show icon buttons only when scrolled */}
                {isScrolled && (
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Contact Icon Button */}
                    <Link href="/contact">
                      <motion.button
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2.5 rounded-full bg-yellow-400 hover:bg-yellow-500 text-black hover:shadow-lg hover:shadow-yellow-400/40 transition-all duration-200"
                        title="Get in touch"
                      >
                        <Send size={20} />
                      </motion.button>
                    </Link>
                  </motion.div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-light-heading dark:text-white p-2"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Services Mega Dropdown */}
      <ServicesMegaDropdown 
        isOpen={isDropdownOpen} 
        onClose={() => setIsDropdownOpen(false)} 
      />

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-20 left-0 right-0 z-40 md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-light-border dark:border-white/10 overflow-hidden shadow-lg shadow-black/10 dark:shadow-black/30"
      >
        <div className="px-4 py-6 space-y-4 max-w-5xl mx-auto">
          {NAVIGATION.main.map((item) => (
            item.label === 'Services' ? (
              <div key={item.href}>
                <button
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                  className="w-full flex items-center justify-between text-light-text dark:text-dark-text hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors font-medium py-2"
                >
                  <span>{item.label}</span>
                  <motion.div
                    animate={{ rotate: isMobileDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </button>
                
                {/* Mobile Services Dropdown */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: isMobileDropdownOpen ? 'auto' : 0,
                    opacity: isMobileDropdownOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden ml-4 space-y-2 mt-2"
                >
                  {NAVIGATION.services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => {
                        setIsOpen(false)
                        setIsMobileDropdownOpen(false)
                      }}
                      className="block text-light-text dark:text-dark-text hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors font-medium py-2 text-sm border-l-2 border-transparent hover:border-yellow-400 pl-3"
                    >
                      {service.label}
                    </Link>
                  ))}
                </motion.div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-light-text dark:text-dark-text hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors font-medium py-2"
              >
                {item.label}
              </Link>
            )
          ))}

          {/* Mobile - Get Started Button (always show in mobile menu) */}
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full font-semibold hover:shadow-lg hover:shadow-yellow-400/40 transition-all mt-4"
            >
              Get Started
            </motion.button>
          </Link>

          {/* Mobile - Theme Toggle (always accessible) */}
          <div className="flex items-center justify-center gap-2 pt-3 border-t border-white/10">
            <span className="text-sm text-light-text dark:text-dark-text font-medium">Theme:</span>
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-yellow-400 hover:shadow-lg dark:hover:shadow-yellow-400/20 transition-all duration-200"
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  )
}


