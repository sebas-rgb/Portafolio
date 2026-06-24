'use client'

import { motion } from 'framer-motion'
import { useLocale } from './useLocale'

const copy = {
  es: {
    tasks: ['Mejorar dashboard admin', 'Optimizar inventario', 'Integrar pagos', 'Pulir experiencia móvil'],
    highlights: ['Sprint 04: UX operativo', 'Integración de pagos con seguridad', 'Flujo de órdenes más rápido'],
    eyebrow: 'Actualmente construyendo',
    title: 'Laboratorio en marcha',
    description: 'Estoy afinando el sistema comercial con paneles administrativos, gestión de inventario y una experiencia operativa que se siente ágil, creativa y lista para crecer.',
    focus: 'Enfoque del sprint',
    currentProject: 'Proyecto actual',
    projectName: 'Sistema de Gestión Comercial',
    status: 'En desarrollo',
    progress: 'Progreso',
    highPriority: 'Prioridad alta',
    inProgress: 'En progreso',
    nextDemo: 'Siguiente demo',
    nextDemoText: 'Flujo de órdenes y control de stock revisados para la versión beta.',
    creativeGoal: 'Meta creativa',
    creativeGoalText: 'Hacer que el sistema se sienta como un estudio digital, no solo un panel administrativo.'
  },
  en: {
    tasks: ['Improve admin dashboard', 'Optimize inventory', 'Integrate payments', 'Polish mobile experience'],
    highlights: ['Sprint 04: operational UX', 'Secure payment integration', 'Faster order flow'],
    eyebrow: 'Currently building',
    title: 'Lab in progress',
    description: 'I am refining the commercial system with admin panels, inventory management, and an operational experience that feels agile, creative, and ready to grow.',
    focus: 'Sprint focus',
    currentProject: 'Current project',
    projectName: 'Commercial Management System',
    status: 'In development',
    progress: 'Progress',
    highPriority: 'High priority',
    inProgress: 'In progress',
    nextDemo: 'Next demo',
    nextDemoText: 'Order flow and stock control reviewed for the beta version.',
    creativeGoal: 'Creative goal',
    creativeGoalText: 'Make the system feel like a digital studio, not just an admin panel.'
  }
}

export default function CurrentlyBuilding() {
  const locale = useLocale()
  const t = copy[locale]

  return (
    <section className="mt-20 rounded-[2rem] border border-white/10 bg-[#07111d]/95 p-8 shadow-soft">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-pink-300/80">{t.eyebrow}</p>
            <h2 className="section-title font-semibold text-text">{t.title}</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-muted">{t.description}</p>

          <div className="rounded-[2rem] border border-white/10 bg-[#0d1628]/90 p-6 shadow-soft">
            <p className="text-sm uppercase tracking-[0.24em] text-muted">{t.focus}</p>
            <ul className="mt-5 space-y-3 text-sm text-text/90">
              {t.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1320]/95 p-8 shadow-soft"
        >
          <div className="absolute -right-10 top-10 h-24 w-24 rounded-full bg-purple-500/10 blur-3xl" />
          <div className="absolute left-6 bottom-10 h-20 w-20 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-muted">{t.currentProject}</p>
              <h3 className="mt-2 text-2xl font-semibold text-text">{t.projectName}</h3>
            </div>
            <span className="rounded-full bg-gradient-to-r from-cyan-300 to-purple-500 px-4 py-2 text-sm font-semibold text-bg">
              {t.status}
            </span>
          </div>

          <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-[#09101e]/95 p-6 shadow-glow">
            <div className="flex items-center justify-between text-sm text-muted">
              <span className="uppercase tracking-[0.2em]">{t.progress}</span>
              <span className="font-semibold text-text">75%</span>
            </div>
            <div className="mt-4 overflow-hidden rounded-full bg-white/10">
              <div className="h-3.5 w-3/4 rounded-full bg-gradient-to-r from-cyan-300 to-purple-500 shadow-glow" />
            </div>
            <div className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-muted">
              <span>Planning</span>
              <span>Release prep</span>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {t.tasks.map((task, index) => (
              <div key={task} className="flex items-center justify-between gap-3 rounded-[1.75rem] border border-white/10 bg-[#111a2f]/95 p-4 shadow-soft">
                <div>
                  <p className="text-sm font-semibold text-text">{task}</p>
                  <p className="text-xs text-muted">{index === 0 ? t.highPriority : t.inProgress}</p>
                </div>
                <span className="inline-flex h-3.5 w-16 rounded-full bg-gradient-to-r from-cyan-300 to-purple-500" />
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.75rem] bg-[#0d1726]/95 p-5 text-sm text-muted">
              <p className="text-sm font-semibold text-text">{t.nextDemo}</p>
              <p className="mt-2">{t.nextDemoText}</p>
            </div>
            <div className="rounded-[1.75rem] bg-[#0d1726]/95 p-5 text-sm text-muted">
              <p className="text-sm font-semibold text-text">{t.creativeGoal}</p>
              <p className="mt-2">{t.creativeGoalText}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
