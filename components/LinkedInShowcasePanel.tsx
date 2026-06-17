'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LinkedInShowcasePanel({ profile, onClose }: { profile: any; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-6 w-full rounded-2xl bg-[#071022] p-6 shadow-neon" style={{ minHeight: 420 }}>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-semibold text-white">LinkedIn Profile</div>
            <div className="text-sm text-cyan-200">{profile?.name || 'Sebastián López'}</div>
          </div>
          <div className="flex items-center gap-3">
            <a href={profile?.url || '#'} target="_blank" rel="noreferrer" className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white">Abrir LinkedIn</a>
            <button onClick={onClose} className="rounded-md border px-3 py-2 text-sm text-gray-300">Cerrar</button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="rounded-xl bg-[#0b1624] p-5">
            <div className="text-sm text-gray-300">{profile?.headline || 'Fullstack developer | IA | React | FastAPI'}</div>
            <div className="mt-4 text-sm text-gray-300">{profile?.summary || 'Perfil profesional y experiencia relevante.'}</div>
          </div>
          <div className="rounded-xl bg-[#0b1624] p-5">
            <div className="text-sm text-gray-300">Especialidades:</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {['Fullstack', 'React', 'FastAPI', 'IA', 'Producto'].map((t) => (
                <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-200">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
