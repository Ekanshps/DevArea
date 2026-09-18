'use client'

const serviceSignals = ['WEB DEVELOPMENT', 'UI / UX DESIGN', 'LANDING PAGES', 'AI CHATBOTS', 'SEO STRATEGY', 'GOOGLE ADS', 'META ADS', 'CHATGPT ADS', 'ECOMMERCE', 'REDESIGN', 'MAINTENANCE']

export function ServicesMarquee() {
  return (
    <section className="services-marquee-section overflow-hidden border-y border-[#54acbf]/20 bg-[#082f49] py-5" aria-label="Our services">
      <div className="edge-fade overflow-hidden">
        <div className="service-marquee flex w-max items-center gap-8 text-xs font-bold tracking-[.2em] text-[#a7ebf2]">
          {[...serviceSignals, ...serviceSignals].map((signal, index) => (
            <span key={`${signal}-${index}`} className="flex items-center gap-8 whitespace-nowrap">
              <span>{signal}</span><span className="text-[#54acbf]">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
