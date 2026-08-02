'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Check, Star, TrendingUp, Zap, Shield, Code2, Palette, MessageCircle, ShoppingCart, RefreshCw, Wrench } from 'lucide-react'
import { BRAND, SERVICES, TESTIMONIALS, CASE_STUDIES, FAQ, PRICING, BLOG_POSTS } from '@/lib/constants'
import { generateOrganizationSchema, generateFAQSchema } from '@/lib/schema'

export default function Home() {
  const orgSchema = generateOrganizationSchema()
  const faqSchema = generateFAQSchema(FAQ.slice(0, 4).map(f => ({ question: f.question, answer: f.answer })))

  return (
    <>
      {/* Global Dark Mode Styles */}
      <style>{`
        :root { 
          --color-services-bg: #eeeedf;
          --color-heading: #000000;
          --color-text: #475569;
        }
        html.dark { 
          --color-services-bg: #000000;
          --color-heading: #ffffff;
          --color-text: #cbd5e1;
        }
      `}</style>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="flex flex-col w-full bg-light-bg">
        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 sm:pb-20 px-4 bg-light-bg dark:bg-dark-bg">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob" />
            <div className="absolute top-40 right-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-4000" />
          </div>

          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700/50 rounded-full">
                  <Star className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                  <span className="text-sm text-yellow-700 dark:text-yellow-300 font-medium">Award-winning digital agency</span>
                </div>

                <h1
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                  style={{ color: 'var(--color-heading, #0f172a)' }}
                >
                  Build 
                  <span className="bg-gradient-to-r from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400 bg-clip-text text-transparent"> Websites </span>
                  That Convert
                </h1>

                <p className="text-lg sm:text-xl text-light-text-secondary dark:text-dark-text-secondary mb-8 max-w-2xl leading-relaxed">
                  We design and develop premium websites, landing pages, and ecommerce stores that drive measurable growth. With strategic design, technical SEO, and AI integration, we help businesses dominate their markets.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg font-semibold hover:shadow-lg hover:shadow-yellow-400/40 transition-all flex items-center gap-2"
                    >
                      Start Your Project <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                  <Link href="/portfolio">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 border-2 border-yellow-400/50 dark:border-yellow-600/50 text-light-accent dark:text-yellow-400 rounded-lg font-semibold hover:bg-yellow-50 dark:hover:bg-yellow-500/10 transition-all"
                    >
                      View Our Work
                    </motion.button>
                  </Link>
                </div>

                <div className="flex gap-6 text-sm text-light-text-secondary dark:text-dark-text-secondary">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span>50+ Successful Projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span>Fast Turnaround</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Visual */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-96 lg:h-full min-h-96"
              >
                <div className="absolute inset-0 rounded-2xl flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/premium-solutions.png"
                    alt="Premium Digital Solutions - Laptop and Phone Mockup"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 100vw"
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section - "What We Deliver" */}
        <section 
          className="w-full py-16 sm:py-24 lg:py-32 px-4 transition-colors duration-500"
          style={{
            backgroundColor: 'var(--color-services-bg, #eeeedf)',
          }}
        >
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16 sm:mb-20"
            >
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 transition-colors duration-300" style={{color: 'var(--color-heading, #000000)'}}>
                What We Deliver
              </h2>
              <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-300" style={{color: 'var(--color-text, #475569)'}}>
                From strategy to code, design to delivery, DevArea brings your ideas to life through design, technology, and creativity that actually performs.
              </p>
            </motion.div>

            {/* Services Grid - All 8 Services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
              {SERVICES.map((service, index) => {
                // Service color mapping for card backgrounds
                const colorMap: { [key: string]: { start: string; end: string; icon: React.ReactNode } } = {
                  'web-development': { start: '#2563eb', end: '#1e3a8a', icon: <Code2 className="w-7 h-7 text-white" /> },
                  'uiux-design': { start: '#a855f7', end: '#6d28d9', icon: <Palette className="w-7 h-7 text-white" /> },
                  'landing-pages': { start: '#ec4899', end: '#be185d', icon: <Zap className="w-7 h-7 text-white" /> },
                  'ecommerce': { start: '#f97316', end: '#c2410c', icon: <ShoppingCart className="w-7 h-7 text-white" /> },
                  'seo-websites': { start: '#16a34a', end: '#15803d', icon: <TrendingUp className="w-7 h-7 text-white" /> },
                  'ai-chatbot': { start: '#0891b2', end: '#0e7490', icon: <MessageCircle className="w-7 h-7 text-white" /> },
                  'website-redesign': { start: '#7c3aed', end: '#5b21b6', icon: <RefreshCw className="w-7 h-7 text-white" /> },
                  'maintenance': { start: '#64748b', end: '#475569', icon: <Wrench className="w-7 h-7 text-white" /> },
                }

                const colors = colorMap[service.id] || colorMap['web-development']

                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -6 }}
                  >
                    <Link href={service.href}>
                      <div
                        className="group h-full p-6 sm:p-7 rounded-[20px] shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden relative"
                        style={{
                          background: `linear-gradient(135deg, ${colors.start} 0%, ${colors.end} 100%)`,
                        }}
                      >
                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16 group-hover:opacity-10 transition-opacity" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-black opacity-10 rounded-full -ml-12 -mb-12 group-hover:opacity-20 transition-opacity" />

                        {/* Content */}
                        <div className="relative z-10">
                          {/* Icon and Arrow */}
                          <div className="flex justify-between items-start mb-4">
                            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                              {colors.icon}
                            </div>
                            <ArrowRight className="w-5 h-5 text-white opacity-60 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                          </div>

                          {/* Title */}
                          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                            {service.title}
                          </h3>

                          {/* Description */}
                          <p className="text-white/90 text-sm leading-relaxed mb-4">
                            {service.description}
                          </p>

                          {/* Explore Button */}
                          <button className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/20 hover:bg-white/30 text-white font-medium text-sm rounded-lg transition-all duration-200 group/btn">
                            Learn More
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full py-12 sm:py-20 lg:py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 sm:mb-20 text-center">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent">
                  Why Choose DevArea
                </span>
              </h2>
              <p className="text-xl text-light-text max-w-2xl mx-auto">
                We combine strategy, design, and technology to deliver results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: TrendingUp, title: 'Results-Driven', description: 'Every project is optimized for conversions and measurable growth' },
                { icon: Shield, title: 'Premium Quality', description: 'Production-ready code, modern design, and best practices' },
                { icon: Zap, title: 'Fast & Responsive', description: 'Blazing-fast websites optimized for mobile and desktop' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-[#b91c1c]/10 to-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-xl"
                >
                  <item.icon className="w-12 h-12 text-[#fbbf24] mb-4" />
                  <h3 className="text-xl font-bold bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] bg-clip-text text-transparent mb-3">{item.title}</h3>
                  <p className="text-light-text">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 sm:py-20 lg:py-32 px-4 bg-dark-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 sm:mb-20 text-center">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#dc2626] to-[#f59e0b] bg-clip-text text-transparent">
                  Loved by Clients
                </span>
              </h2>
              <p className="text-xl text-light-text max-w-2xl mx-auto">
                Hear from businesses we've helped grow
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-dark-800 to-dark-900 border border-white/10 rounded-xl"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-light-text mb-6 leading-relaxed">{testimonial.content}</p>
                  <div className="pt-6 border-t border-white/10">
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-light-text text-sm">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Preview */}
        <section className="w-full py-12 sm:py-20 lg:py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 sm:mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#fbbf24] to-[#dc2626] bg-clip-text text-transparent">
                  Featured Work
                </span>
              </h2>
              <p className="text-xl text-light-text">
                Projects that showcase our expertise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CASE_STUDIES.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group overflow-hidden rounded-xl border border-white/10 hover:border-[#f59e0b]/50 transition-all duration-300"
                >
                  <div className="aspect-video bg-gradient-to-br from-[#b91c1c]/20 to-[#f59e0b]/20 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 to-transparent" />
                  </div>
                  <div className="p-6 bg-dark-900">
                    <div className="text-sm text-[#fbbf24] mb-2 font-semibold">{study.category}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                    <ul className="space-y-1 text-sm text-light-text">
                      {study.results.slice(0, 2).map((result, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-400" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-[#f59e0b] text-[#fbbf24] rounded-lg font-semibold hover:bg-amber-500/10 transition-all inline-flex items-center gap-2"
                >
                  View All Case Studies <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 sm:py-20 lg:py-32 px-4 bg-gradient-to-r from-[#b91c1c]/10 to-[#f59e0b]/10 border-y border-[#f59e0b]/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] bg-clip-text text-transparent">
              Ready to grow your business?
            </h2>
            <p className="text-xl text-light-text mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a strategy that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#b91c1c]/40 transition-all flex items-center justify-center gap-2"
                >
                  Schedule a Consultation <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/pricing">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-[#f59e0b] text-amber-300 rounded-lg font-semibold hover:bg-amber-500/10 transition-all"
                >
                  View Pricing
                </motion.button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}


