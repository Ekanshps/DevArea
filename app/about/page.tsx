'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check, Compass, HeartHandshake, Lightbulb, ShieldCheck } from 'lucide-react'

const proofPoints = [
  { icon: Compass, title: 'Clarity before activity', text: 'Every engagement starts with the business goal, audience, and one measurable next step.' },
  { icon: Lightbulb, title: 'Senior attention', text: 'You work directly with the people shaping the strategy, design, and build.' },
  { icon: ShieldCheck, title: 'Built to last', text: 'Clean systems, fast experiences, and practical handover keep your team in control.' },
]

const process = [
  ['01', 'Discover', 'We understand your offer, audience, current friction, and the opportunity in front of you.'],
  ['02', 'Shape', 'We turn the brief into a clear direction, page structure, visual language, and delivery plan.'],
  ['03', 'Build', 'We design and develop the experience with performance, accessibility, and real-world use in mind.'],
  ['04', 'Launch and grow', 'We test, launch, measure, and stay available for the improvements that matter next.'],
]

const badges = ['Strategy-led delivery', 'Performance-minded builds', 'Direct senior support', 'Built in India, ready worldwide']

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <section className="relative px-6 pb-24 pt-24 sm:px-10 lg:px-16 lg:pb-32 lg:pt-36">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_18%,rgba(84,172,191,0.22),transparent_30%)]" />
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-[#a7ebf2]">About DevArea</p>
          <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="max-w-4xl text-5xl font-semibold leading-[.98] tracking-[-.04em] text-white sm:text-7xl">We turn ambitious ideas into <span className="text-[#a7ebf2]">useful momentum.</span></motion.h1>
            <div><p className="text-lg leading-8 text-[#b5d4dc]">DevArea is an independent digital solutions agency for teams that want their online presence to work harder and feel more like them.</p><Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#a7ebf2] px-6 py-3 font-bold text-[#011c2d] transition hover:bg-white">Start a conversation <ArrowUpRight size={17} /></Link></div>
          </div>
        </div>
      </section>

      <section className="bg-[#edfaff] px-6 py-20 text-[#011c2d] sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl"><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{badges.map((badge) => <div key={badge} className="flex items-center gap-3 border-t-2 border-[#54acbf] py-4 text-sm font-bold text-[#0d5c73]"><Check size={18} className="shrink-0 text-[#26658c]" />{badge}</div>)}</div></div>
      </section>

      <section className="bg-white px-6 py-24 text-[#011c2d] sm:px-10 lg:px-16 lg:py-32"><div className="mx-auto max-w-7xl"><div className="mb-14 max-w-2xl"><p className="text-sm font-bold uppercase tracking-[.2em] text-[#26658c]">The people behind the work</p><h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-.03em] sm:text-5xl">Small team. Clear ownership. Serious care.</h2></div><div className="grid gap-6 md:grid-cols-2"><motion.article whileHover={{ y: -6 }} className="grid gap-6 border border-[#54acbf]/30 bg-[#edfaff] p-5 sm:grid-cols-[180px_1fr] sm:p-6"><Image src="/images/Ekansh.jpeg" alt="Ekansh Pratap Singh, Founder and Leader at DevArea" width={600} height={700} className="aspect-[4/5] w-full object-cover" /><div className="self-end"><p className="text-xs font-bold uppercase tracking-[.18em] text-[#26658c]">Founder / Leader</p><h3 className="mt-3 text-2xl font-bold">Ekansh Pratap Singh</h3><p className="mt-4 leading-7 text-[#26658c]">Sets the direction, keeps the work close to the business goal, and makes sure every project moves with clarity.</p></div></motion.article><motion.article whileHover={{ y: -6 }} className="grid gap-6 border border-[#54acbf]/30 bg-[#edfaff] p-5 sm:grid-cols-[180px_1fr] sm:p-6"><Image src="/images/GauravTiwari.jpeg" alt="Gaurav Tiwari, Lead Member and Co-founder at DevArea" width={600} height={700} className="aspect-[4/5] w-full object-cover" /><div className="self-end"><p className="text-xs font-bold uppercase tracking-[.18em] text-[#26658c]">Lead Member / Co-founder</p><h3 className="mt-3 text-2xl font-bold">Gaurav Tiwari</h3><p className="mt-4 leading-7 text-[#26658c]">Brings the technical thinking and hands-on execution that turns a strong direction into a reliable digital product.</p></div></motion.article></div></div></section>

      <section className="bg-[#edfaff] px-6 py-24 text-[#011c2d] sm:px-10 lg:px-16 lg:py-32"><div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="text-sm font-bold uppercase tracking-[.2em] text-[#26658c]">Why DevArea</p><h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-.03em] sm:text-5xl">Less theatre. More useful progress.</h2></div><div className="grid gap-5 sm:grid-cols-3">{proofPoints.map(({ icon: Icon, title, text }) => <div key={title} className="border-l-2 border-[#54acbf] pl-5"><Icon className="text-[#0d5c73]" size={24} /><h3 className="mt-6 text-lg font-bold">{title}</h3><p className="mt-3 leading-7 text-[#26658c]">{text}</p></div>)}</div></div></div></section>

      <section className="bg-[#011c2d] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32"><div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[.2em] text-[#a7ebf2]">How we work</p><h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">A calm process with visible progress.</h2></div><div className="mt-14 grid gap-0 border-t border-white/15 md:grid-cols-4">{process.map(([number, title, text]) => <div key={number} className="border-b border-white/15 py-7 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0"><span className="text-sm font-bold text-[#a7ebf2]">{number}</span><h3 className="mt-8 text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-[#9fc8d4]">{text}</p></div>)}</div><Link href="/contact" className="mt-12 inline-flex items-center gap-2 rounded-full bg-[#a7ebf2] px-6 py-3 font-bold text-[#011c2d] transition hover:bg-white">Start your project <ArrowUpRight size={17} /></Link></div></section>
    </main>
  )
}
