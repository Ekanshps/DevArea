'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Bot, Check, Code2, Megaphone, MousePointer2, Quote, Search, ShoppingBag, Sparkles, WandSparkles } from 'lucide-react'
import { BRAND, SEO } from '@/lib/constants'
import { generateOrganizationSchema } from '@/lib/schema'
import { generateFAQSchema } from '@/lib/schema'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { HomeFAQ } from '@/components/sections/HomeFAQ'
import { FAQ } from '@/lib/constants'

const capabilities = [
  { icon: Code2, number: '01', title: 'Web development', text: 'Fast, scalable websites engineered around your next stage of growth.' },
  { icon: MousePointer2, number: '02', title: 'Conversion design', text: 'Landing pages and interfaces that make the right action feel obvious.' },
  { icon: Bot, number: '03', title: 'AI automation', text: 'Chatbots and workflows that give your team more time for meaningful work.' },
  { icon: Megaphone, number: '04', title: 'Growth campaigns', text: 'Google, Meta, and ChatGPT ads connected to a clear commercial goal.' },
  { icon: Search, number: '05', title: 'SEO foundations', text: 'Technical structure and content direction built for lasting visibility.' },
  { icon: ShoppingBag, number: '06', title: 'Ecommerce systems', text: 'Online stores that make browsing, buying, and managing simple.' },
]

const serviceSignals = ['WEB DEVELOPMENT', 'UI / UX DESIGN', 'LANDING PAGES', 'AI CHATBOTS', 'SEO STRATEGY', 'GOOGLE ADS', 'META ADS', 'CHATGPT ADS', 'ECOMMERCE', 'REDESIGN', 'MAINTENANCE']
const testimonials = [
  { quote: 'DevArea helped us turn a complicated offer into a website people understood immediately.', name: 'Founder, growing service brand', meta: 'Website + positioning' },
  { quote: 'The team brought calm to the process and gave us a digital foundation we can finally build on.', name: 'Marketing lead, modern startup', meta: 'Redesign + SEO' },
  { quote: 'Clear thinking, beautiful execution, and support that did not disappear after launch.', name: 'Owner, independent business', meta: 'Landing page + campaigns' },
]
const principles = ['Strategy before screens', 'Performance from day one', 'Human support after launch']

export default function Home() {
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const schema = generateOrganizationSchema()
  const faqSchema = generateFAQSchema(FAQ)
  useEffect(() => {
    const timer = window.setInterval(() => setTestimonialIndex((current) => (current + 1) % testimonials.length), 5200)
    return () => window.clearInterval(timer)
  }, [])

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <main className="home-page overflow-hidden">
      <section className="relative isolate flex min-h-[calc(100vh-5rem)] items-end overflow-hidden px-6 pb-16 pt-24 sm:px-10 lg:min-h-[760px] lg:px-16 lg:pb-24 lg:pt-32">
        <Image src="/images/premium-solutions.png" alt="DevArea digital product design workspace" fill priority sizes="100vw" className="-z-20 object-cover object-center opacity-70 lg:object-[58%_center]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#011c2d_0%,rgba(1,28,45,.96)_30%,rgba(1,28,45,.68)_58%,rgba(1,28,45,.15)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,#011c2d_0%,transparent_42%,rgba(1,28,45,.3)_100%)]" />
        <div className="mx-auto w-full max-w-7xl"><motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }} className="max-w-3xl"><div className="mb-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#a7ebf2]"><span className="h-px w-10 bg-[#a7ebf2]" /> Independent digital studio</div><h1 className="text-balance text-5xl font-semibold leading-[.98] tracking-[-0.04em] text-white sm:text-7xl lg:text-[6.4rem]">Make your next move <span className="text-[#a7ebf2]">visible.</span></h1><p className="mt-8 max-w-xl text-lg leading-8 text-[#d1e8ed]">DevArea builds the websites, automations, and campaigns that turn good businesses into obvious choices.</p><div className="mt-10 flex flex-col gap-4 sm:flex-row"><Link href="/contact" className="group flex items-center justify-center gap-3 rounded-full bg-[#a7ebf2] px-7 py-4 font-bold text-[#011c2d] transition hover:bg-white">Start a conversation <ArrowUpRight size={18} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" /></Link><Link href="/services" className="flex items-center justify-center gap-3 rounded-full border border-[#a7ebf2]/50 px-7 py-4 font-semibold text-[#edfaff] transition hover:border-[#a7ebf2] hover:bg-[#082f49]/70">Explore services <ArrowDownRight size={18} /></Link></div><div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#b5d4dc]">{principles.map((principle) => <span key={principle} className="flex items-center gap-2"><Check size={15} className="text-[#a7ebf2]" />{principle}</span>)}</div></motion.div><div className="mt-16 flex items-center justify-between border-t border-white/20 pt-5 text-xs uppercase tracking-[.18em] text-[#9fc8d4]"><span>Scroll to explore</span><span className="hidden sm:block">Lucknow · India · Worldwide</span></div></div>
      </section>
      <TestimonialsSection />
      <HomeFAQ />

      <section className="overflow-hidden border-y border-[#54acbf]/20 bg-[#082f49] py-5"><div className="edge-fade overflow-hidden"><div className="service-marquee flex items-center gap-8 text-xs font-bold tracking-[.2em] text-[#a7ebf2]">{[...serviceSignals, ...serviceSignals].map((signal, index) => <span key={`${signal}-${index}`} className="flex items-center gap-8 whitespace-nowrap"><span>{signal}</span><span className="text-[#54acbf]">✦</span></span>)}</div></div></section>

      <section className="bg-[#edfaff] px-6 py-24 text-[#011c2d] sm:px-10 lg:px-16 lg:py-32"><div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-sm font-bold uppercase tracking-[.2em] text-[#26658c]">What we do</p><h2 className="mt-5 max-w-md text-4xl font-semibold leading-tight tracking-[-.03em] sm:text-5xl">Digital work with a point of view.</h2></div><div><p className="max-w-2xl text-xl leading-8 text-[#26658c]">You do not need more noise. You need a partner who can connect positioning, design, technology, and distribution into one clear experience.</p><Link href="/about" className="mt-8 inline-flex items-center gap-2 font-bold text-[#0d5c73] hover:text-[#011c2d]">Meet DevArea <ArrowUpRight size={17} /></Link></div></div><div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-[#54acbf]/25 bg-[#54acbf]/25 sm:grid-cols-2 lg:grid-cols-3">{capabilities.map(({ icon: Icon, number, title, text }, index) => <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .07 }} className="group min-h-64 bg-[#edfaff] p-7 transition hover:bg-white"><div className="flex items-center justify-between"><Icon size={25} className="text-[#26658c]" /><span className="text-xs font-bold text-[#54acbf]">{number}</span></div><h3 className="mt-12 text-xl font-bold">{title}</h3><p className="mt-4 leading-7 text-[#26658c]">{text}</p></motion.div>)}</div></div></section>

      <section className="bg-[#edfaff] px-6 py-24 text-[#011c2d] sm:px-10 lg:px-16 lg:py-32"><div className="mx-auto max-w-7xl"><div className="mb-12 flex items-end justify-between gap-6"><div><div className="flex items-center gap-4 text-[#26658c]"><Quote size={22} /><span className="text-sm font-bold uppercase tracking-[.2em]">Good company</span></div><h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-.03em] sm:text-5xl">A few words from the other side.</h2></div><div className="hidden gap-2 sm:flex">{testimonials.map((item, index) => <button key={item.name} aria-label={`Show testimonial ${index + 1}`} onClick={() => setTestimonialIndex(index)} className={`h-2 rounded-full transition-all ${testimonialIndex === index ? 'w-8 bg-[#0d5c73]' : 'w-2 bg-[#54acbf]/40'}`} />)}</div></div><motion.div key={testimonialIndex} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }} className="grid gap-10 rounded-[2rem] border border-[#54acbf]/30 bg-white p-8 shadow-[12px_12px_0_#a7ebf2] sm:p-12 lg:grid-cols-[.25fr_1fr]"><div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#011c2d] text-2xl text-[#a7ebf2]">“</div><div><p className="max-w-4xl text-3xl font-semibold leading-tight tracking-[-.02em] sm:text-5xl">{testimonials[testimonialIndex].quote}</p><div className="mt-10 flex flex-col justify-between gap-3 border-t border-[#54acbf]/25 pt-5 text-sm sm:flex-row"><span className="font-bold text-[#0d5c73]">{testimonials[testimonialIndex].name}</span><span className="text-[#26658c]">{testimonials[testimonialIndex].meta}</span></div></div></motion.div></div></section>

      <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16 lg:py-32"><div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#54acbf]/10 blur-3xl" /><div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_.8fr] lg:items-end"><div><div className="flex items-center gap-4 text-[#a7ebf2]"><WandSparkles size={22} /><span className="text-sm font-bold uppercase tracking-[.2em]">A better starting point</span></div><h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-[-.03em] text-white sm:text-6xl">Bring us the messy brief. We will find the signal.</h2></div><div className="lg:pb-2"><p className="text-lg leading-8 text-[#9fc8d4]">From a first website to an entire digital growth system, we make complicated things feel calm, useful, and ready to ship.</p><Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#a7ebf2] px-6 py-3 font-semibold text-[#011c2d] transition hover:bg-white">Tell us what is next <ArrowUpRight size={17} /></Link></div></div></section>
      <div className="sr-only">{BRAND.name} is a digital solutions agency in India specializing in {SEO.keywords.join(', ')}.</div>
    </main>
  </>
}
