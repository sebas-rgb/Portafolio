'use client'

import { motion } from 'framer-motion'

type MethodStep = {
  title: string
  description: string
  accent: 'purple' | 'blue' | 'yellow' | 'pink' | 'cyan' | 'green'
}

const steps: MethodStep[] = [
  { title: 'Idea', description: 'Identifico oportunidades y problemas reales.', accent: 'purple' },
  { title: 'Análisis', description: 'Entiendo al usuario, los objetivos y el contexto.', accent: 'blue' },
  { title: 'Arquitectura', description: 'Diseño la solución, modelos y flujos.', accent: 'yellow' },
  { title: 'Tecnologías', description: 'Selecciono las mejores herramientas para el proyecto.', accent: 'pink' },
  { title: 'IA + Implementación', description: 'Uso IA para acelerar el desarrollo sin perder control.', accent: 'cyan' },
  { title: 'Validación', description: 'Pruebas, ajustes y calidad antes del lanzamiento.', accent: 'green' },
  { title: 'Deploy', description: 'Llevo el producto a producción con estabilidad.', accent: 'blue' }
]

const accentClasses: Record<MethodStep['accent'], string> = {
  purple: 'border-purple-400/40 bg-purple-500/10 text-purple-200',
  blue: 'border-blue-400/40 bg-blue-500/10 text-blue-200',
  yellow: 'border-yellow-400/40 bg-yellow-400/10 text-yellow-200',
  pink: 'border-pink-400/40 bg-pink-400/10 text-pink-200',
  cyan: 'border-cyan-400/40 bg-cyan-400/10 text-cyan-200',
  green: 'border-green-400/40 bg-green-400/10 text-green-200'
}

export default function Methodology() {
  return (
    <section className="cartoon-world mt-20 rounded-[2rem] border-2 border-white/10 bg-[#0d1223]/80 p-8 shadow-soft">
      <div className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Cómo construyo software</p>
            <h2 className="section-title sketch-underline font-semibold text-text">Mi metodología es un recorrido creativo</h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-muted">
              Mi metodología combina pensamiento estratégico, buenas prácticas de desarrollo y el poder de la IA para construir productos de alto valor.
            </p>
          </div>
          <div className="sticker relative rounded-3xl p-4 shadow-glow">
            <span className="handwritten text-sm text-[#071022]">Flujo de trabajo</span>
            <p className="mt-2 text-xl font-semibold text-[#071022]">Idea - Arquitectura - Deploy</p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border-2 border-white/10 bg-[#08111f]/80 p-6 shadow-soft">
          <div className="absolute right-6 top-4 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute left-4 bottom-12 h-28 w-28 rounded-full bg-purple-400/10 blur-3xl" />
          <div className="cartoon-doodle right-12 top-10 h-12 w-12 rotate-12 rounded-full border-4 border-dashed border-yellow-300/35" />

          <div className="grid gap-5 lg:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, rotate: index % 2 === 0 ? -1 : 1 }}
                transition={{ delay: index * 0.06, duration: 0.55 }}
                className={`cartoon-card relative overflow-hidden rounded-[2rem] border-2 ${accentClasses[step.accent]} p-5 shadow-soft backdrop-blur-sm`}
              >
                <span className="absolute right-4 top-4 font-['Baloo_2'] text-5xl opacity-20">{index + 1}</span>
                <div className="flex items-center gap-3">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-2xl border-2 font-['Baloo_2'] text-lg ${accentClasses[step.accent]}`}>
                    {step.title[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text">{step.title}</p>
                    <p className="mt-2 text-sm leading-6 text-muted">{step.description}</p>
                  </div>
                </div>
                <div className="mt-4 h-1.5 w-20 rounded-full bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300" />
                <div className="mt-4 text-sm text-muted">{step.title === 'IA + Implementación' ? 'IA acelera tareas repetitivas con control técnico.' : ''}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
