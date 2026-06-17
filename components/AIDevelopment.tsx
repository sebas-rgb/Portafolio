'use client'

import { motion } from 'framer-motion'

type AIPanel = {
  title: string
  items: string[]
  accent: 'pink' | 'cyan' | 'green'
}

const panels: AIPanel[] = [
  {
    title: 'Lo que hago yo',
    items: [
      'Análisis de requerimientos',
      'Diseño de arquitectura',
      'Selección tecnológica',
      'Modelado de datos',
      'Diseño de APIs',
      'Decisiones de producto',
      'Revisión final'
    ],
    accent: 'pink'
  },
  {
    title: 'Lo que acelero con IA',
    items: [
      'Boilerplate',
      'CRUDs repetitivos',
      'Refactorización',
      'Documentación',
      'Testing inicial',
      'Prototipos rápidos',
      'Exploración de alternativas'
    ],
    accent: 'cyan'
  },
  {
    title: 'Lo que nunca delego',
    items: [
      'Decisiones de arquitectura',
      'Seguridad',
      'Criterio técnico',
      'Validación final',
      'Experiencia de usuario',
      'Lógica de negocio crítica'
    ],
    accent: 'green'
  }
]

const accentClasses: Record<AIPanel['accent'], string> = {
  pink: 'border-pink-400/20 bg-pink-400/10 text-pink-200',
  cyan: 'border-cyan-400/20 bg-cyan-400/10 text-cyan-200',
  green: 'border-green-400/20 bg-green-400/10 text-green-200'
}

export default function AIDevelopment() {
  return (
    <section className="cartoon-world mt-20 rounded-[2rem] border-2 border-white/10 bg-[#0c1322]/90 p-8 shadow-soft">
      <div className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.28em] text-yellow-300/80">AI-Augmented Development</p>
            <h2 className="section-title sketch-underline font-semibold text-text">Laboratorio creativo de IA</h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-muted">
              Utilizo IA como herramienta de productividad, no como reemplazo del criterio técnico. La idea, arquitectura y validación final son responsabilidad mía; la IA acelera la implementación.
            </p>
          </div>
          <div className="cartoon-card hidden rounded-[1.75rem] border border-white/10 bg-[#07101c]/90 p-4 text-sm text-muted shadow-glow sm:block">
            <div className="font-semibold text-text">Estudio IA</div>
            <p className="mt-2">Robot, terminal y enlaces visuales para el flujo creativo.</p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border-2 border-white/10 bg-[#08111d]/90 p-6 shadow-soft">
          <div className="absolute -right-8 top-8 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute left-6 bottom-10 h-24 w-24 rounded-full bg-pink-400/10 blur-3xl" />

          <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-5">
              <div className="glass-card cartoon-card rounded-[2rem] border border-cyan-400/20 bg-[#0b1721]/90 p-6 shadow-soft">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-muted">Robot de apoyo</p>
                    <h3 className="mt-2 text-2xl font-semibold text-text">AI Workbench</h3>
                  </div>
                  <span className="sticker rounded-full px-3 py-2 text-xs">IA</span>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl border border-cyan-300/15 bg-[#08131f]/90 p-4 shadow-[inset_0_0_24px_rgba(34,211,238,0.08)]">
                    <p className="text-xs uppercase tracking-[0.24em] text-muted">Terminal</p>
                    <p className="mt-3 text-sm text-text">Generación de código, documentación y pruebas rápidas.</p>
                  </div>
                  <div className="rounded-3xl border border-pink-300/15 bg-[#08131f]/90 p-4 shadow-[inset_0_0_24px_rgba(244,114,182,0.08)]">
                    <p className="text-xs uppercase tracking-[0.24em] text-muted">Flujo</p>
                    <p className="mt-3 text-sm text-text">Conexiones visuales entre datos, APIs y experiencia de usuario.</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="cartoon-card rounded-[1.75rem] border border-pink-400/20 bg-[#091523]/90 p-5 shadow-soft">
                  <p className="text-xs uppercase tracking-[0.24em] text-pink-200/80">Widget</p>
                  <p className="mt-3 text-base font-semibold text-text">Chip IA</p>
                </div>
                <div className="cartoon-card rounded-[1.75rem] border border-yellow-400/20 bg-[#091523]/90 p-5 shadow-soft">
                  <p className="text-xs uppercase tracking-[0.24em] text-yellow-200/80">Badge</p>
                  <p className="mt-3 text-base font-semibold text-text">Productos + IA</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {panels.map((panel, index) => (
                <motion.div
                  key={panel.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.55 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className={`cartoon-card rounded-[2rem] border p-5 shadow-soft ${accentClasses[panel.accent]}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-text">{panel.title}</p>
                    <div className="h-8 w-8 rounded-2xl bg-white/10 text-center text-sm leading-8 text-text">{index + 1}</div>
                  </div>
                  <ul className="mt-5 space-y-3 text-sm text-muted">
                    {panel.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-text" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
