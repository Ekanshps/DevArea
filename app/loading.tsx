export default function Loading() {
  return (
    <main className="min-h-[70vh] px-6 py-24 sm:px-10 lg:px-16" aria-busy="true" aria-label="Loading page">
      <div className="mx-auto max-w-7xl animate-pulse space-y-6">
        <div className="h-4 w-32 rounded bg-[#54acbf]/30" />
        <div className="h-16 max-w-2xl rounded bg-[#082f49]" />
        <div className="h-5 max-w-xl rounded bg-[#082f49]" />
        <div className="grid gap-5 pt-12 sm:grid-cols-3"><div className="h-48 rounded-2xl bg-[#082f49]" /><div className="h-48 rounded-2xl bg-[#082f49]" /><div className="h-48 rounded-2xl bg-[#082f49]" /></div>
      </div>
    </main>
  )
}
