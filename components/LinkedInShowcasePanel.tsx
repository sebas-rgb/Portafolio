'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocale } from './useLocale'

export default function LinkedInShowcasePanel({ profile, onClose }: { profile: any; onClose: () => void }) {
  const locale = useLocale()
  const t = locale === 'en'
    ? {
        open: 'Open LinkedIn',
        close: 'Close',
        headline: 'Fullstack developer | AI | React | FastAPI',
        summary: 'Professional profile and relevant experience.',
        specialties: 'Specialties',
        tags: ['Fullstack', 'React', 'FastAPI', 'AI', 'Product']
      }
    : {
        open: 'Abrir LinkedIn',
        close: 'Cerrar',
        headline: 'Fullstack developer | IA | React | FastAPI',
        summary: 'Perfil profesional y experiencia relevante.',
        specialties: 'Especialidades',
        tags: ['Fullstack', 'React', 'FastAPI', 'IA', 'Producto']
      }

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-6 w-full rounded-2xl bg-[#071022] p-6 shadow-neon" style={{ minHeight: 420 }}>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-semibold text-white">LinkedIn Profile</div>
            <div className="text-sm text-cyan-200">{profile?.name || 'Sebastián López'}</div>
          </div>
          <div className="flex items-center gap-3">
            <a href={profile?.url || '#'} target="_blank" rel="noreferrer" className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white">{t.open}</a>
            <button onClick={onClose} className="rounded-md border px-3 py-2 text-sm text-gray-300">{t.close}</button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="rounded-xl bg-[#0b1624] p-5">
            <div className="text-sm text-gray-300">{profile?.headline || t.headline}</div>
            <div className="mt-4 text-sm text-gray-300">{profile?.summary || t.summary}</div>
          </div>
          <div className="rounded-xl bg-[#0b1624] p-5">
            <div className="text-sm text-gray-300">{t.specialties}:</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {t.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-200">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
