'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { NAVIGATION } from '@/lib/constants'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = NAVIGATION.main.filter((item) => !['Portfolio', 'Blog'].includes(item.label))

  return (
    <motion.header initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-8">
      <nav className={`mx-auto flex max-w-7xl items-center justify-between px-2 ${isScrolled ? 'rounded-full border border-[#a7ebf2]/15 bg-[#062b43]/95 px-5 py-2 shadow-2xl shadow-black/20 backdrop-blur-xl' : ''}`}>
        <Link href="/" className="shrink-0" onClick={() => setIsOpen(false)}><Image src="/images/logo1.png" alt="DevArea" width={300} height={100} priority className="h-12 w-auto object-contain sm:h-14" /></Link>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => item.label === 'Services' ? (
            <div key={item.href} className="relative py-3" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center gap-1 text-sm font-medium text-[#9fc8d4] transition hover:text-[#a7ebf2]">Services <ChevronDown size={15} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} /></button>
              {servicesOpen && <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-2"><div className="rounded-2xl border border-[#a7ebf2]/15 bg-[#062b43] p-2 shadow-2xl">{NAVIGATION.services.map((service) => <Link key={service.href} href={service.href} onClick={() => setServicesOpen(false)} className="block rounded-xl px-4 py-3 text-sm text-[#9fc8d4] transition hover:bg-[#0d4663] hover:text-[#a7ebf2]">{service.label}</Link>)}</div></div>}
            </div>
          ) : <Link key={item.href} href={item.href} className="text-sm font-medium text-[#9fc8d4] transition hover:text-[#a7ebf2]">{item.label}</Link>)}
        </div>
        <Link href="/contact" className="hidden items-center gap-2 rounded-full bg-[#a7ebf2] px-5 py-3 text-sm font-bold text-[#011c2d] transition hover:bg-white md:flex">Start a project <ArrowUpRight size={16} /></Link>
        <button aria-label={isOpen ? 'Close menu' : 'Open menu'} onClick={() => setIsOpen(!isOpen)} className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-[#a7ebf2]/20 text-[#a7ebf2] md:hidden">
          <motion.span animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 0 : -5 }} className="absolute h-px w-5 bg-current" />
          <motion.span animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? 0 : 5 }} className="absolute h-px w-5 bg-current" />
          <motion.span animate={{ opacity: isOpen ? 0 : 1, x: isOpen ? 8 : 0 }} className="absolute h-px w-5 bg-current" />
        </button>
      </nav>
      <AnimatePresence>{isOpen && <motion.div initial={{ opacity: 0, height: 0, y: -12 }} animate={{ opacity: 1, height: 'auto', y: 0 }} exit={{ opacity: 0, height: 0, y: -12 }} transition={{ duration: .35, ease: [0.22, 1, 0.36, 1] }} className="mt-3 overflow-hidden rounded-3xl border border-[#a7ebf2]/15 bg-[#062b43]/98 p-5 shadow-2xl backdrop-blur-xl md:hidden"><div className="flex flex-col gap-1">{navItems.map((item, index) => <motion.div key={item.href} initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * .05 }}><Link href={item.href} onClick={() => setIsOpen(false)} className="block border-b border-white/10 py-3 text-[#9fc8d4] last:border-0 hover:text-[#a7ebf2]">{item.label}</Link></motion.div>)}<Link href="/contact" onClick={() => setIsOpen(false)} className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#a7ebf2] px-5 py-3 font-bold text-[#011c2d]">Start a project <ArrowUpRight size={16} /></Link></div></motion.div>}</AnimatePresence>
    </motion.header>
  )
}
