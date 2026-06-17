'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function EmailPanel({ email }: { email: string }) {
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      alert('Correo copiado')
    } catch {
      alert('No se pudo copiar')
    }
  }

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-6 w-full rounded-2xl bg-[#071022] p-6 shadow-neon" style={{ minHeight: 320 }}>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-semibold text-white">Correo</div>
            <div className="text-sm text-cyan-200">{email}</div>
          </div>
          <div className="flex items-center gap-3">
            <a href={`mailto:${email}`} className="rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white">Enviar email</a>
            <button onClick={copy} className="rounded-md border px-3 py-2 text-sm text-gray-300">Copiar</button>
          </div>
        </div>

        <div className="mt-6 text-sm text-gray-300">Puedes usar el botón para copiar mi correo o abrir tu cliente.</div>
      </motion.div>
    </AnimatePresence>
  )
}
