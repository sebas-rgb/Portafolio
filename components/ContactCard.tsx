'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { useLocale } from './useLocale'

type Props = {
  id: string
  label: string
  value: string
  description: string
  color: string
  onClick: (id: string) => void
}

export default function ContactCard({ id, label, value, description, color, onClick }: Props) {
  const locale = useLocale()
  const openLabel = locale === 'en' ? 'Open' : 'Abrir'

  return (
    <motion.button
      onClick={() => onClick(id)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="cartoon-card group relative flex w-full cursor-pointer items-start gap-4 rounded-[1.75rem] border-2 px-5 py-6 text-left transition"
      style={{ borderColor: color, background: `linear-gradient(145deg, ${color}22, rgba(255,255,255,0.03) 36%, transparent)` }}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 shadow-[0_4px_0_rgba(0,0,0,0.22)]" style={{ background: color + '33' }}>
        <div className="font-['Baloo_2'] text-2xl font-bold text-white">{label[0]}</div>
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-white">{label}</div>
            <div className="mt-1 text-xs text-cyan-200">{value}</div>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-300">{description}</p>
      </div>
      <div className="ml-4 hidden items-center rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-cyan-100 group-hover:flex">{openLabel}</div>
    </motion.button>
  )
}
