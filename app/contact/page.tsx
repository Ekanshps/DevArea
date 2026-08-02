'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { BRAND } from '@/lib/constants'
import { WhatsAppButton } from '@/components/sections/WhatsAppButton'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <main className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="w-full relative pt-32 pb-16 sm:pb-20 lg:pb-28 px-4">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-white to-orange-50/50 -z-10" />

        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="inline-block mb-4 px-4 py-2 bg-green-100/60 text-green-700 rounded-full text-sm font-semibold backdrop-blur-sm">
              ⚡ Fastest Response on WhatsApp
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#b91c1c] via-orange-600 to-[#f59e0b] bg-clip-text text-transparent">
                Get Your Business Website in 3–5 Days
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-2 leading-relaxed font-semibold">
              Free demo • Starting from ₹2,999 • No upfront payment
            </p>

            <p className="text-sm text-gray-500 max-w-xl mx-auto mb-10">
              💚 We respond within 10–30 minutes on WhatsApp
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 max-w-2xl mx-auto">
              {[
                { icon: '✔', text: 'No upfront payment' },
                { icon: '✔', text: 'Free demo before payment' },
                { icon: '✔', text: 'Fast delivery in 3–5 days' },
                { icon: '✔', text: 'Mobile-friendly design' },
              ].map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-xs sm:text-sm text-gray-700"
                >
                  <span className="text-green-600 font-bold">{badge.icon}</span> {badge.text}
                </motion.div>
              ))}
            </div>

            {/* Primary CTA - WhatsApp */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <WhatsAppButton type="demo" variant="default" size="lg" />
              <motion.button
                whileHover={{ y: -2 }}
                onClick={() =>
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-8 py-4 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-all"
              >
                Prefer form? Share below
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section id="contact-form" className="w-full py-20 sm:py-28 lg:py-32 px-4 sm:px-6 pb-32 sm:pb-40">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-14 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch With Us
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're here to help you build the perfect website for your business
            </p>
          </motion.div>

          {/* Two Card Grid - Equal Height */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 auto-rows-fr">
            {/* LEFT CARD - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden h-full flex flex-col"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-gray-50/95 backdrop-blur-xl" />
              <div className="absolute inset-0 border border-white/40 rounded-3xl" />
              <div className="absolute inset-0 shadow-2xl shadow-[#b91c1c]/10 rounded-3xl" />

              {/* Card Content */}
              <div className="relative p-8 sm:p-10 lg:p-12 flex flex-col h-full">
                {/* Header */}
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Let's Connect</h3>
                <p className="text-gray-600 text-sm mb-8">Choose your preferred way to reach us</p>

                {/* Contact Cards */}
                <div className="space-y-4 mb-8 flex-shrink-0">
                  {[
                    {
                      icon: Mail,
                      label: 'Email',
                      value: BRAND.email,
                      href: `mailto:${BRAND.email}`,
                      color: 'from-blue-500/10 to-cyan-500/10',
                      borderColor: 'border-blue-200/50',
                      iconColor: 'text-blue-600',
                    },
                    {
                      icon: Phone,
                      label: 'WhatsApp (Fastest)',
                      value: BRAND.phone,
                      href: `tel:${BRAND.phone}`,
                      color: 'from-green-500/10 to-emerald-500/10',
                      borderColor: 'border-green-200/50',
                      iconColor: 'text-green-600',
                      highlight: true,
                    },
                    {
                      icon: MapPin,
                      label: 'Location',
                      value: BRAND.address,
                      href: '#',
                      color: 'from-orange-500/10 to-orange-500/10',
                      borderColor: 'border-orange-200/50',
                      iconColor: 'text-orange-600',
                    },
                  ].map((contact, index) => (
                    <motion.a
                      key={index}
                      href={contact.href}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, x: 4 }}
                      className={`group/card flex items-center gap-4 p-5 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${contact.color} ${contact.borderColor} hover:border-opacity-100 cursor-pointer ${
                        contact.highlight ? 'ring-2 ring-green-300/30' : ''
                      }`}
                    >
                      <div
                        className={`p-3 rounded-xl bg-white/60 group-hover/card:bg-white transition-all flex-shrink-0 ${contact.iconColor}`}
                      >
                        <contact.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-600 font-medium">{contact.label}</p>
                        <p className="text-sm font-semibold text-gray-900 truncate">{contact.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Fast Response Box - Pushed to bottom */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mt-auto p-6 rounded-2xl bg-gradient-to-br from-green-50/80 to-emerald-50/80 border border-green-200/60 flex-shrink-0"
                >
                  <p className="text-sm font-bold text-green-700 mb-2">⚡ Fast Response Guaranteed</p>
                  <p className="text-xs text-green-700 leading-relaxed">
                    We respond within 10–30 minutes on WhatsApp. No upfront payment required until
                    you approve the demo.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* RIGHT CARD - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden h-full flex flex-col"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-gray-50/95 backdrop-blur-xl" />
              <div className="absolute inset-0 border border-white/40 rounded-3xl" />
              <div className="absolute inset-0 shadow-2xl shadow-[#b91c1c]/10 rounded-3xl" />

              {/* Card Content */}
              <div className="relative p-8 sm:p-10 lg:p-12 flex flex-col h-full">
                {/* Header */}
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Prefer to Fill a Form?</h3>
                <p className="text-gray-600 text-sm mb-6">Share your details below. WhatsApp is faster.</p>

                {/* Tip Box */}
                <div className="p-4 bg-green-50/80 border border-green-200/60 rounded-xl mb-8 flex-shrink-0">
                  <p className="text-xs text-green-700 font-medium">
                    💡 Tip: WhatsApp chat gets you free demo first, payment only after approval.
                  </p>
                </div>

                {/* Form - Scrollable on overflow */}
                <form className="space-y-5 flex-1 overflow-y-auto pr-1" action="/api/contact" method="POST">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-white/80 border border-gray-200/60 text-gray-900 placeholder:text-gray-400 rounded-xl transition-all duration-300 focus:outline-none focus:bg-white focus:border-[#f59e0b] focus:ring-2 focus:ring-amber-500/20 focus:shadow-lg focus:shadow-[#b91c1c]/10"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 9876543210"
                      className="w-full px-4 py-3 bg-white/80 border border-gray-200/60 text-gray-900 placeholder:text-gray-400 rounded-xl transition-all duration-300 focus:outline-none focus:bg-white focus:border-[#f59e0b] focus:ring-2 focus:ring-amber-500/20 focus:shadow-lg focus:shadow-[#b91c1c]/10"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 bg-white/80 border border-gray-200/60 text-gray-900 placeholder:text-gray-400 rounded-xl transition-all duration-300 focus:outline-none focus:bg-white focus:border-[#f59e0b] focus:ring-2 focus:ring-amber-500/20 focus:shadow-lg focus:shadow-[#b91c1c]/10"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      What do you need?
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/80 border border-gray-200/60 text-gray-900 placeholder:text-gray-400 rounded-xl transition-all duration-300 focus:outline-none focus:bg-white focus:border-[#f59e0b] focus:ring-2 focus:ring-amber-500/20 focus:shadow-lg focus:shadow-[#b91c1c]/10"
                    >
                      <option value="">Select a service (optional)</option>
                      <option value="business-website">Business Website (₹2999)</option>
                      <option value="landing-pages">Landing Page</option>
                      <option value="ecommerce">E-commerce Store</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="other">Something Else</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Tell us about your project *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={3}
                      placeholder="Describe your business, goals, and any specific requirements..."
                      className="w-full px-4 py-3 bg-white/80 border border-gray-200/60 text-gray-900 placeholder:text-gray-400 rounded-xl resize-none transition-all duration-300 focus:outline-none focus:bg-white focus:border-[#f59e0b] focus:ring-2 focus:ring-amber-500/20 focus:shadow-lg focus:shadow-[#b91c1c]/10"
                    />
                  </div>
                </form>

                {/* Button Section - Always visible at bottom */}
                <div className="mt-6 pt-6 border-t border-gray-200/30 flex-shrink-0 space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-[#b91c1c] via-orange-600 to-[#f59e0b] text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-[#b91c1c]/30 hover:shadow-2xl hover:shadow-[#b91c1c]/40 flex items-center justify-center gap-2 group"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Send Details
                  </motion.button>

                  {/* Helper Text */}
                  <p className="text-xs text-gray-500 text-center">
                    We'll review and respond within 24 hours. Or use WhatsApp for instant chat.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


    </main>
  )
}

