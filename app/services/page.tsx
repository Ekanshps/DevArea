'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Palette,
  Smartphone,
  ShoppingCart,
  TrendingUp,
  MessageCircle,
  RefreshCw,
  Headphones,
  Zap,
  Shield,
  Rocket,
  Users,
  Eye,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import Link from 'next/link';

// Components
import ServiceCard from '@/components/sections/ServiceCard';
import DetailedServiceSection from '@/components/sections/DetailedServiceSection';
import WhyChooseUsCard from '@/components/sections/WhyChooseUsCard';
import ProcessStep from '@/components/sections/ProcessStep';
import PricingCard from '@/components/sections/PricingCard';
import FAQAccordion from '@/components/sections/FAQAccordion';

// Service data
const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom website development with modern, scalable code architecture',
    href: '/services/web-development',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, user-friendly design services for digital products',
    href: '/services/uiux-design',
  },
  {
    icon: Smartphone,
    title: 'Landing Page Design',
    description: 'High-converting landing page design services for businesses',
    href: '/services/landing-pages',
  },
  {
    icon: ShoppingCart,
    title: 'Ecommerce Development',
    description: 'Complete ecommerce website development for online stores',
    href: '/services/ecommerce',
  },
  {
    icon: TrendingUp,
    title: 'SEO Optimization',
    description: 'SEO-friendly website development to boost your search rankings',
    href: '/services/seo-websites',
  },
  {
    icon: MessageCircle,
    title: 'AI Chatbot Integration',
    description: 'Intelligent chatbot integration for customer support automation',
    href: '/services/ai-chatbot',
  },
  {
    icon: RefreshCw,
    title: 'Website Redesign',
    description: 'Modern website redesign services to refresh your digital presence',
    href: '/services/website-redesign',
  },
  {
    icon: Headphones,
    title: 'Maintenance & Support',
    description: 'Ongoing website maintenance and technical support services',
    href: '/services/maintenance',
  },
];

// Why Choose Us data
const whyChooseUs = [
  {
    icon: Smartphone,
    title: 'Mobile-First Approach',
    description:
      'We design and develop with mobile users in mind, ensuring responsive website design across all devices',
  },
  {
    icon: TrendingUp,
    title: 'SEO-Optimized',
    description:
      'Every project is built with SEO best practices to ensure maximum visibility and organic traffic',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description:
      'Optimized performance for instant loading times and exceptional user experience',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description:
      'Enterprise-grade security practices to protect your website and customer data',
  },
  {
    icon: Code2,
    title: 'Scalable Architecture',
    description:
      'Clean, maintainable code that grows with your business without performance degradation',
  },
  {
    icon: Users,
    title: 'Ongoing Support',
    description:
      'Dedicated technical support and maintenance to keep your website running smoothly',
  },
];

// Process data
const processSteps = [
  {
    title: 'Discovery',
    description: 'Understanding your business goals, target audience, and project requirements',
  },
  {
    title: 'Strategy',
    description: 'Creating a detailed roadmap and technical architecture for your solution',
  },
  {
    title: 'Design',
    description: 'Crafting beautiful, user-centric designs that align with your brand',
  },
  {
    title: 'Development',
    description: 'Building your website with clean, scalable code using latest technologies',
  },
  {
    title: 'Testing',
    description: 'Rigorous quality assurance to ensure functionality across all platforms',
  },
  {
    title: 'Launch',
    description: 'Seamless deployment and optimization for maximum performance and visibility',
  },
];

// Pricing data
const pricingPlans = [
  {
    name: 'Starter',
    subtitle: 'Perfect for small projects',
    price: 'â‚¹12,999',
    originalPrice: 'â‚¹16,000',
    description: '5 Pages Website',
    features: [
      'Responsive Design',
      'SEO Friendly',
      '1 Year Free Domain',
      'Free SSL Certificate',
      'Basic Support',
      '5 Free Email IDs',
    ],
    isPopular: false,
  },
  {
    name: 'Growth',
    subtitle: 'For growing businesses',
    price: 'â‚¹24,999',
    originalPrice: 'â‚¹30,000',
    description: '12 Pages Website',
    features: [
      'Mobile-Optimized',
      'SEO & Speed Optimized',
      '1 Year Free Domain',
      'Free SSL Certificate',
      'Priority Support',
      '10 Free Email IDs',
      'Admin Panel',
    ],
    isPopular: true,
  },
  {
    name: 'Ecommerce',
    subtitle: 'For online stores',
    price: 'â‚¹34,999',
    originalPrice: 'â‚¹42,000',
    description: '20 Pages Website',
    features: [
      'Product Management',
      'Payment Gateway',
      'Order Tracking',
      '1 Year Free Domain',
      'Free SSL Certificate',
      '24/7 Support',
      'Marketing Tools',
    ],
    isPopular: false,
  },
  {
    name: 'Custom',
    subtitle: 'For enterprise needs',
    price: 'â‚¹????',
    description: 'Tailored Solution',
    features: [
      'Custom Features',
      'Dedicated Team',
      'API Integration',
      'Full Domain Package',
      'Premium Support',
      'Advanced Analytics',
      'Consulting Included',
    ],
    isPopular: false,
  },
];

// FAQ data
const faqItems = [
  {
    question: 'How long does website development typically take?',
    answer:
      'Project timeline depends on complexity and scope. Typically, a standard website takes 4-8 weeks from discovery to launch. We provide a detailed project roadmap during the initial consultation.',
  },
  {
    question: 'Do you offer ongoing support and maintenance?',
    answer:
      'Yes, we offer comprehensive maintenance and support packages to ensure your website runs smoothly. This includes regular updates, security patches, backups, and technical assistance.',
  },
  {
    question: 'Are all websites SEO-optimized?',
    answer:
      'Absolutely. Every website we develop is built with SEO best practices from the ground up. We ensure clean code, fast loading times, mobile optimization, and keyword-rich content structure.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer:
      'Yes, we specialize in modern website redesigns. We can transform your current site into a responsive, modern, and high-converting platform while preserving your existing data and SEO authority.',
  },
  {
    question: 'What if I need a custom solution?',
    answer:
      'We build custom solutions for unique business needs. Contact our team to discuss your specific requirements, and we\'ll create a tailored proposal with timeline and pricing.',
  },
  {
    question: 'Do you provide hosting and domain services?',
    answer:
      'Yes, we provide reliable hosting and free domain registration as part of our packages. All our hosting includes SSL certificates, daily backups, and uptime monitoring.',
  },
];

export default function ServicesPage() {
  return (
    <main className="w-full min-h-screen bg-light-bg">
      {/* Hero Section */}
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-light-heading mb-6 leading-tight">
              Our <span className="bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] bg-clip-text text-transparent">
                Services
              </span>
            </h1>

            <p className="text-xl text-light-text mb-8 max-w-2xl mx-auto leading-relaxed">
              Comprehensive digital solutions to elevate your business and drive growth. From web development to digital marketing, we have everything you need.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-light-text">
                <CheckCircle className="w-5 h-5 text-[#b91c1c]" />
                <span className="text-sm font-semibold">Mobile-First Design</span>
              </div>
              <div className="flex items-center gap-2 text-light-text">
                <CheckCircle className="w-5 h-5 text-[#b91c1c]" />
                <span className="text-sm font-semibold">SEO Ready</span>
              </div>
              <div className="flex items-center gap-2 text-light-text">
                <CheckCircle className="w-5 h-5 text-[#b91c1c]" />
                <span className="text-sm font-semibold">Fast Delivery</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Get Started
              </motion.a>
              <motion.a
                href="/portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-amber-600 text-[#b91c1c] font-bold rounded-lg hover:bg-amber-600/10 transition-all duration-300"
              >
                View Portfolio
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Grid */}
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4 bg-[#f59e0b]/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-light-heading mb-4">
              What We <span className="bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] bg-clip-text text-transparent">
                Offer
              </span>
            </h2>
            <p className="text-xl text-light-text max-w-2xl mx-auto">
              Complete digital services tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Section 1 - Web Development */}
      <DetailedServiceSection
        number="SERVICE 01"
        title="Custom Web Development"
        description="Our web development services bring your ideas to life with clean, efficient, and scalable code. We specialize in creating responsive websites optimized for all devices and designed for maximum conversions."
        benefits={[
          'Responsive website design that works on all devices',
          'SEO-friendly website development with clean code structure',
          'Fast-loading websites optimized for user experience',
          'Scalable architecture ready for business growth',
          'Secure, modern web technologies and best practices',
          'Ongoing support and maintenance included',
        ]}
        ctaText="Start Web Project"
        ctaHref="/contact?service=web-development"
        imageLeft={false}
      >
        <div className="relative w-full h-96 bg-gradient-to-br from-[#b91c1c]/10 to-[#f59e0b]/10 rounded-xl border border-[#f59e0b]/20 flex items-center justify-center group">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-center"
          >
            <Code2 className="w-24 h-24 text-[#b91c1c] mx-auto mb-4" />
            <p className="text-light-heading font-semibold">Web Development</p>
          </motion.div>
        </div>
      </DetailedServiceSection>

      {/* Why Choose Us */}
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-light-heading mb-4">
              Why Choose <span className="bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] bg-clip-text text-transparent">
                Us
              </span>
            </h2>
            <p className="text-xl text-light-text max-w-2xl mx-auto">
              We deliver results with a focus on quality, innovation, and customer success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <WhyChooseUsCard key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4 bg-[#f59e0b]/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-light-heading mb-4">
              Our <span className="bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-xl text-light-text max-w-2xl mx-auto">
              A proven methodology that ensures project success from start to finish
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                number={index + 1}
                icon={
                  index === 0
                    ? Eye
                    : index === 1
                      ? AlertCircle
                      : index === 2
                        ? Palette
                        : index === 3
                          ? Code2
                          : index === 4
                            ? CheckCircle
                            : Rocket
                }
                {...step}
                isLast={index === processSteps.length - 1}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-light-heading mb-4">
              Transparent <span className="bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] bg-clip-text text-transparent">
                Pricing
              </span>
            </h2>
            <p className="text-xl text-light-text max-w-2xl mx-auto">
              Affordable, scalable plans for businesses of all sizes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                {...plan}
                index={index}
                ctaHref={`/contact?plan=${plan.name.toLowerCase()}`}
              />
            ))}
          </div>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-amber-600/5 border border-[#f59e0b]/20 rounded-xl text-center"
          >
            <p className="text-light-text">
              All plans include free domain name, SSL certificate, and 1 year of free hosting. Need a custom solution?{' '}
              <Link href="/contact" className="text-[#b91c1c] font-semibold hover:underline">
                Get in touch with our team
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4 bg-[#f59e0b]/5">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-light-heading mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-light-text">
              Everything you need to know about our services
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <FAQAccordion key={index} {...item} index={index} />
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
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] bg-clip-text text-transparent">
              Ready to transform your digital presence?
            </h2>
            <p className="text-xl text-light-text mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a strategy that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Get Quote
              </motion.a>
              <motion.a
                href="tel:+917068317379"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-amber-600 text-[#b91c1c] font-bold rounded-lg hover:bg-amber-600/10 transition-all duration-300"
              >
                Book Call
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}


