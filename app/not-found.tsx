'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, Home, MessageCircle, Sparkles } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="relative flex min-h-[72vh] items-center overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_40%,rgba(84,172,191,0.18),transparent_32%),radial-gradient(circle_at_85%_65%,rgba(167,235,242,0.12),transparent_28%)]" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1fr_.8fr]">
        <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[.24em] text-[#a7ebf2]"><span className="h-px w-10 bg-[#a7ebf2]" />DevArea / signal lost</div>
          <h1 className="mt-7 text-[7rem] font-semibold leading-[.8] tracking-[-.08em] text-white sm:text-[11rem]">4<span className="text-[#a7ebf2]">0</span>4</h1>
          <h2 className="mt-8 max-w-xl text-3xl font-semibold leading-tight text-white sm:text-5xl">This page took a different route.</h2>
          <p className="mt-5 max-w-lg text-lg leading-8 text-[#9fc8d4]">No stress. The useful stuff is still right here, and we can help you find the next move.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href="/" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#a7ebf2] px-6 py-3.5 font-bold text-[#011c2d] transition hover:bg-white"><Home className="h-4 w-4" />Back to home</Link><Link href="/services" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#a7ebf2]/60 bg-[#062b43] px-6 py-3.5 font-semibold text-[#edfaff] transition hover:border-[#a7ebf2] hover:bg-[#0d4663]"><ArrowUpRight className="h-4 w-4" />Explore services</Link></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24, rotate: 2 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ delay: .15, duration: .65 }} className="relative border border-[#a7ebf2]/25 bg-[#082f49]/80 p-6 shadow-2xl shadow-black/20 sm:p-8">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-bold uppercase tracking-[.16em] text-[#54acbf]"><span>devarea.system</span><span className="flex gap-1.5"><i className="h-2 w-2 rounded-full bg-[#a7ebf2]" /><i className="h-2 w-2 rounded-full bg-[#54acbf]" /><i className="h-2 w-2 rounded-full bg-[#26658c]" /></span></div>
          <div className="py-12"><Sparkles className="text-[#a7ebf2]" size={28} /><p className="mt-6 text-2xl font-semibold leading-tight text-white">The page is unavailable, but the signal is still strong.</p><div className="mt-8 space-y-3 text-sm text-[#9fc8d4]"><p><span className="text-[#a7ebf2]">status:</span> looking for a better route</p><p><span className="text-[#a7ebf2]">next:</span> choose a useful destination</p></div></div>
          <Link href="/contact" className="flex items-center justify-between border-t border-white/10 pt-4 text-sm font-bold text-[#a7ebf2] transition hover:text-white"><span>Talk to the team</span><MessageCircle size={18} /></Link>
        </motion.div>
      </div>
    </main>
  )
}
