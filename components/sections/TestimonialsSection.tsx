'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Quote } from 'lucide-react'

const testimonials = [
  { quote: 'DevArea helped us turn a complicated offer into a website people understood immediately.', name: 'Founder, growing service brand', meta: 'Website + positioning' },
  { quote: 'The team brought calm to the process and gave us a digital foundation we can finally build on.', name: 'Marketing lead, modern startup', meta: 'Redesign + SEO' },
  { quote: 'Clear thinking, beautiful execution, and support that did not disappear after launch.', name: 'Owner, independent business', meta: 'Landing page + campaigns' },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => setActiveIndex((current) => (current + 1) % testimonials.length), 5200)
    return () => window.clearInterval(timer)
  }, [])

  const testimonial = testimonials[activeIndex]

  return (
    <section className="bg-[#011c2d] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3 text-[#a7ebf2]"><Quote size={20} /><span className="text-sm font-bold uppercase tracking-[.2em]">Client perspective</span></div>
            <h2 className="mt-6 max-w-md text-4xl font-semibold leading-tight tracking-[-.03em] sm:text-5xl">Good work should make the next step easier.</h2>
            <div className="mt-8 flex gap-2">
              {testimonials.map((item, index) => <button key={item.name} aria-label={`Show testimonial ${index + 1}`} onClick={() => setActiveIndex(index)} className={`h-1.5 transition-all ${activeIndex === index ? 'w-12 bg-[#a7ebf2]' : 'w-5 bg-[#54acbf]/40'}`} />)}
            </div>
          </div>
          <motion.article key={activeIndex} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .5 }} className="relative overflow-hidden border-l-2 border-[#a7ebf2] bg-[#082f49] p-8 sm:p-12">
            <span className="absolute right-8 top-3 text-8xl font-serif leading-none text-[#54acbf]/30">”</span>
            <p className="relative max-w-3xl text-2xl font-semibold leading-tight sm:text-4xl">{testimonial.quote}</p>
            <div className="mt-10 flex flex-col gap-2 border-t border-white/15 pt-5 text-sm sm:flex-row sm:items-center sm:justify-between"><div><p className="font-bold text-[#a7ebf2]">{testimonial.name}</p><p className="mt-1 text-[#9fc8d4]">{testimonial.meta}</p></div><ArrowUpRight className="text-[#a7ebf2]" size={20} /></div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
