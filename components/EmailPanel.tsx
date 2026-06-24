'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocale } from './useLocale'

export default function EmailPanel({ email }: { email: string }) {
  const locale = useLocale()
  const t = locale === 'en'
    ? { copied: 'Email copied', fail: 'Could not copy', title: 'Email', send: 'Send email', copy: 'Copy', help: 'You can use the button to copy my email or open your mail client.' }
    : { copied: 'Correo copiado', fail: 'No se pudo copiar', title: 'Correo', send: 'Enviar email', copy: 'Copiar', help: 'Puedes usar el botón para copiar mi correo o abrir tu cliente.' }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      alert(t.copied)
    } catch {
      alert(t.fail)
    }
  }

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-6 w-full rounded-2xl bg-[#071022] p-6 shadow-neon" style={{ minHeight: 320 }}>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-semibold text-white">{t.title}</div>
            <div className="text-sm text-cyan-200">{email}</div>
          </div>
          <div className="flex items-center gap-3">
            <a href={`mailto:${email}`} className="rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white">{t.send}</a>
            <button onClick={copy} className="rounded-md border px-3 py-2 text-sm text-gray-300">{t.copy}</button>
          </div>
        </div>

        <div className="mt-6 text-sm text-gray-300">{t.help}</div>
      </motion.div>
    </AnimatePresence>
  )
}
