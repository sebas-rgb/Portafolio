'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function WhatsAppPanel({ number }: { number: string }) {
  const message = encodeURIComponent('Hola Sebastián, vi tu portafolio y me gustaría hablar sobre un proyecto.')
  const link = `https://wa.me/${number.replace(/[^0-9]/g, '')}?text=${message}`

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-6 w-full rounded-2xl bg-[#071022] p-6 shadow-neon" style={{ minHeight: 320 }}>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-semibold text-white">WhatsApp</div>
            <div className="text-sm text-cyan-200">{number}</div>
          </div>
          <div className="flex items-center gap-3">
            <a href={link} target="_blank" rel="noreferrer" className="rounded-md bg-green-400 px-4 py-2 text-sm font-medium text-black">Abrir WhatsApp</a>
          </div>
        </div>

        <div className="mt-6 text-sm text-gray-300">Mensaje sugerido: Hola Sebastián, vi tu portafolio y me gustaría hablar sobre un proyecto.</div>
      </motion.div>
    </AnimatePresence>
  )
}
