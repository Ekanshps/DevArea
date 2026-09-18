'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, MapPin, Phone, Send } from 'lucide-react'
import { BRAND } from '@/lib/constants'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  useEffect(() => {
    const serviceId = new URLSearchParams(window.location.search).get('service')
    const serviceNames: Record<string, string> = {
      'web-development': 'Website or redesign',
      'uiux-design': 'Website or redesign',
      'landing-pages': 'Landing page',
      ecommerce: 'Ecommerce website',
      'seo-websites': 'SEO website',
      'ai-chatbot': 'AI automation or chatbot',
      'website-redesign': 'Website or redesign',
      maintenance: 'Website maintenance',
    }
    const serviceName = serviceId ? serviceNames[serviceId] : undefined
    if (serviceName) setFormData((current) => ({ ...current, service: serviceName, message: `I am interested in ${serviceName.toLowerCase()}. Please help me understand the best next step for my business.` }))
  }, [])
  const update = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setFormData({ ...formData, [event.target.name]: event.target.value })
  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setIsSubmitting(true); setStatus('')
    try { const response = await fetch('https://formspree.io/f/xgoggvzv', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ ...formData, _subject: 'New enquiry from DevArea' }) }); if (!response.ok) throw new Error(); setStatus('Thanks. Your note is on its way.'); setFormData({ name: '', email: '', service: '', message: '' }) } catch { setStatus('Something went wrong. Please email us directly instead.') } finally { setIsSubmitting(false) }
  }
  return <main><section className="relative px-6 pb-20 pt-24 sm:px-10 lg:px-16 lg:pb-28 lg:pt-36"><div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_15%,rgba(84,172,191,0.24),transparent_30%)]" /><div className="mx-auto max-w-7xl"><p className="text-sm font-bold uppercase tracking-[.2em] text-[#a7ebf2]">Start a conversation</p><h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[.98] tracking-[-.04em] text-white sm:text-7xl">Have a good problem? <span className="text-[#a7ebf2]">Let’s make it useful.</span></h1><p className="mt-8 max-w-xl text-lg leading-8 text-[#b5d4dc]">Tell us what you are building, changing, or trying to unlock. We will come back with a thoughtful next step.</p></div></section><section className="bg-[#edfaff] px-6 py-20 text-[#011c2d] sm:px-10 lg:px-16 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="text-sm font-bold uppercase tracking-[.2em] text-[#26658c]">Find us here</p><div className="mt-10 space-y-6 text-[#26658c]"><a href={`mailto:${BRAND.email}`} className="flex items-start gap-4 hover:text-[#011c2d]"><Mail className="mt-1" size={20} /><span><strong className="block text-[#011c2d]">Email</strong>{BRAND.email}</span></a><a href={`tel:${BRAND.phone.replace(/\s/g, '')}`} className="flex items-start gap-4 hover:text-[#011c2d]"><Phone className="mt-1" size={20} /><span><strong className="block text-[#011c2d]">Phone</strong>{BRAND.phone}</span></a><span className="flex items-start gap-4"><MapPin className="mt-1" size={20} /><span><strong className="block text-[#011c2d]">Based in</strong>{BRAND.address}, working worldwide</span></span></div></div><motion.form initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} onSubmit={submit} className="rounded-3xl bg-[#082f49] p-6 shadow-2xl shadow-[#082f49]/20 sm:p-10"><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-semibold text-[#a7ebf2]">Your name<input required name="name" value={formData.name} onChange={update} className="mt-2 w-full rounded-xl px-4 py-3 text-white" placeholder="Jane Smith" /></label><label className="text-sm font-semibold text-[#a7ebf2]">Email address<input required type="email" name="email" value={formData.email} onChange={update} className="mt-2 w-full rounded-xl px-4 py-3 text-white" placeholder="jane@company.com" /></label></div><label className="mt-5 block text-sm font-semibold text-[#a7ebf2]">What can we help with?<select required name="service" value={formData.service} onChange={update} className="mt-2 w-full rounded-xl px-4 py-3"><option value="">Select a service</option><option>Website or redesign</option><option>Landing page</option><option>AI automation or chatbot</option><option>Google, Meta, or ChatGPT ads</option><option>Something else</option></select></label><label className="mt-5 block text-sm font-semibold text-[#a7ebf2]">A little context<textarea required name="message" value={formData.message} onChange={update} rows={6} className="mt-2 w-full rounded-xl px-4 py-3 text-white" placeholder="What are you hoping to make better?" /></label><div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"><button disabled={isSubmitting} className="flex items-center gap-2 rounded-full bg-[#a7ebf2] px-6 py-3 font-bold text-[#011c2d] transition hover:bg-white disabled:opacity-60">{isSubmitting ? 'Sending...' : 'Send enquiry'} <Send size={16} /></button>{status && <p className="text-sm text-[#a7ebf2]">{status}</p>}</div></motion.form></div></section><section className="px-6 py-20 text-center sm:px-10"><p className="text-sm uppercase tracking-[.2em] text-[#77aeba]">Prefer WhatsApp?</p><a href={`https://wa.me/${BRAND.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-xl font-semibold text-[#a7ebf2] hover:text-white">Message us directly <ArrowUpRight size={19} /></a></section></main>
}
