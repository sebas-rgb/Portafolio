'use client'

import { useLocale } from './useLocale'

export default function Footer() {
  const locale = useLocale()

  return (
    <footer className="mt-20 border-t border-white/10 bg-bg/80 py-10">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-6 text-center text-sm text-muted sm:flex-row sm:text-left sm:px-10">
        <p>{locale === 'en' ? 'Building digital products with technical focus and AI.' : 'Construyendo productos digitales con enfoque técnico y IA.'}</p>
        <p>© 2026 Sebastián López</p>
      </div>
    </footer>
  )
}
