import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { BRAND, NAVIGATION } from '@/lib/constants'

export const Footer = () => {
  const year = new Date().getFullYear()
  const socials = [
    { label: 'LinkedIn', href: BRAND.social.linkedin, icon: FaLinkedinIn },
    { label: 'Twitter', href: BRAND.social.twitter, icon: FaTwitter },
    { label: 'Instagram', href: BRAND.social.instagram, icon: FaInstagram },
    { label: 'GitHub', href: BRAND.social.github, icon: FaGithub },
  ]
  return <footer className="border-t border-[#a7ebf2]/15 bg-[#011522] px-6 pb-8 pt-16 text-[#9fc8d4] md:px-10">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-block"><Image src="/images/logo1.png" alt="DevArea" width={180} height={80} className="h-14 w-auto object-contain" /></Link>
          <p className="mt-5 max-w-sm text-sm leading-7">Digital products, campaigns, and automations for businesses ready to move with clarity.</p>
          <div className="mt-6 flex gap-3">{socials.map(({ label, href, icon: SocialIcon }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#a7ebf2]/70 bg-[#082f49] text-[#a7ebf2] transition hover:border-[#a7ebf2] hover:bg-[#a7ebf2] hover:text-[#011c2d]"><SocialIcon size={19} /></a>)}</div>
        </div>
        <div><h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#a7ebf2]">Explore</h3><div className="flex flex-col gap-3 text-sm">{['/about', '/services', '/contact'].map((href) => <Link key={href} href={href} className="capitalize transition hover:text-[#a7ebf2]">{href.slice(1).replace('-', ' ')}</Link>)}</div></div>
        <div><h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#a7ebf2]">Capabilities</h3><div className="flex flex-col gap-3 text-sm">{NAVIGATION.services.slice(0, 5).map((service) => <Link key={service.href} href={service.href} className="transition hover:text-[#a7ebf2]">{service.label}</Link>)}</div></div>
        <div><h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#a7ebf2]">Connect</h3><div className="flex flex-col gap-4 text-sm"><a href={`mailto:${BRAND.email}`} className="flex gap-2 hover:text-[#a7ebf2]"><Mail size={16} />{BRAND.email}</a><a href={`tel:${BRAND.phone.replace(/\s/g, '')}`} className="flex gap-2 hover:text-[#a7ebf2]"><Phone size={16} />{BRAND.phone}</a><span className="flex gap-2"><MapPin size={16} />{BRAND.address}</span></div></div>
      </div>
      <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs sm:flex-row"><p>© {year} {BRAND.name}. Built for meaningful growth.</p><div className="flex flex-wrap gap-4">{NAVIGATION.legal.map((item) => <Link key={item.href} href={item.href} className="hover:text-[#a7ebf2]">{item.label}</Link>)}</div></div>
    </div>
  </footer>
}
