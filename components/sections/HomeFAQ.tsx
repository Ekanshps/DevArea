'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FAQ } from '@/lib/constants'

export function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-[#edfaff] px-6 py-24 text-[#011c2d] sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[.2em] text-[#26658c]">Common questions</p>
          <h2 className="mt-5 max-w-md text-4xl font-semibold leading-tight tracking-[-.03em] sm:text-5xl">A clearer start begins with clear answers.</h2>
          <p className="mt-6 max-w-md leading-7 text-[#26658c]">A few practical answers about scope, timelines, mobile performance, SEO, and working with DevArea.</p>
        </div>
        <div className="divide-y divide-[#54acbf]/30 border-y border-[#54acbf]/30">
          {FAQ.map((item, index) => (
            <div key={item.id} className="py-5">
              <button type="button" onClick={() => setOpenIndex(openIndex === index ? null : index)} aria-expanded={openIndex === index} className="flex w-full items-center justify-between gap-6 text-left text-lg font-bold focus-visible:outline-[#0d5c73]">
                <span>{item.question}</span>
                <ChevronDown size={20} className={`shrink-0 text-[#0d5c73] transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <motion.div initial={false} animate={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }} className="overflow-hidden">
                <p className="max-w-3xl pt-4 leading-7 text-[#26658c]">{item.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
