'use client'

import { useEffect } from 'react'
import { RefreshCw } from 'lucide-react'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 py-24 text-center">
      <div><p className="text-sm font-bold uppercase tracking-[.2em] text-[#a7ebf2]">Something needs attention</p><h1 className="mt-5 text-4xl font-semibold text-white">This page could not load.</h1><p className="mx-auto mt-4 max-w-md leading-7 text-[#9fc8d4]">Please try again. If the problem continues, our team can help you directly.</p><button onClick={() => reset()} className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#a7ebf2] px-6 py-3 font-bold text-[#011c2d] transition hover:bg-white"><RefreshCw size={17} />Try again</button></div>
    </main>
  )
}
