'use client'

import { useEffect, useState } from 'react'

export type Locale = 'es' | 'en'

function detectLocale(): Locale {
  if (typeof navigator === 'undefined') return 'es'

  const language = navigator.language || navigator.languages?.[0] || 'es'
  return language.toLowerCase().startsWith('en') ? 'en' : 'es'
}

export function useLocale() {
  const [locale, setLocale] = useState<Locale>('es')

  useEffect(() => {
    const detected = detectLocale()
    setLocale(detected)
    document.documentElement.lang = detected
  }, [])

  return locale
}
